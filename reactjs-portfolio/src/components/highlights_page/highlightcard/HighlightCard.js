import React from 'react'
import uuidv4 from 'uuid/v4'
export default function HighlightCard(props) {
    return (<>

        <div class="highlight-card card col-12 shadow-sm "> {/* BOOT STRAP CARD*/}
            <div class="row">
                    <img class="card-img col-12 col-xl-6 na"  src={props.imageSrc[0]} alt={uuidv4()}/>

                    <div class="card-body col-12 col-xl-6 na" >
                            <div class="row na" style={{marginBottom:63}}>

                                <div class="col-12 col-xl-6">
                                    <div style={{margin:20}}>
                                        <h4 class="card-title">{props.title}</h4>
                                        <p class="card-text">{props.description}</p>
                                    </div>
                                </div>

                                <div class="col-12 col-xl-6 text-right" style={{marginBottom:63}}>
                                    <div style={{margin:20}}>
                                        <ul class="list-group list-group-flush">
                                            <h4>Skills</h4>
                                            {/* places each skill into the group*/}
                                            {props.skills.map((skill,index) => {
                                                return <li class="list-group-item"><div>{skill}</div></li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            
                            </div>
                            
                            <div class="card-footer primary">
                                {props.links.map((link,index) => {
                                    if(link[1] !== ""){
                                        console.log(link)
                                        return(<a style={{marginRight:4,float:'right'}} className="btn btn-light  float-right hvr-grow-shadow text-black" target="_blank" rel="noopener noreferrer" key={uuidv4()} href={link[1]}>{link[0]}</a>)
                                    }
                                    return null; 
                                })}

                                {props.languages.map((language,index) =>{
                                    console.log(language)
                                    let classna = "devicon-" + language +"-plain"
                                    return (<i style={{fontSize:32, marginRight:10,color:'white'}}className={classna.toLowerCase()}/>)
                                })}
                            </div>
                    </div>

            </div>
        </div>


</>
    )
}
