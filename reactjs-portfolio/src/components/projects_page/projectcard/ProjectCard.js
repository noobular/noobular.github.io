import React from 'react'
import uuidv4 from 'uuid/v4'
export default function ProjectCard(props) {
    return (
<div class="project-card-container col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="project-card card na">
            <h4 class="card-header solidred text-white">{props.title}</h4>
            <img class=" na img-fluid" src={props.imageSrc[0]} alt={uuidv4()}/>
            <div class="card-body" style={{marginBottom:64}}>
                <p class="card-text">{props.description}</p>
                
            </div>
            <div class="card-footer solidred" style={{padding:4, paddingTop:10}}>

                {props.links.map((link,index) => {
                    if(link[1] !== ""){
                        console.log(link)
                        return(<a style={{marginRight:5,float:'right'}} className="btn btn-light waves-effect waves-light" target="_blank" rel="noopener noreferrer" key={uuidv4()} href={link[1]}>{link[0]}</a>)
                    }
                    return null;
                })}
                    
                {props.languages.map((language,index) =>{
                    console.log(language)
                    let classna = "devicon-" + language +"-plain text-white"
                    return (<i className={classna.toLowerCase()} style={{marginRight:10}}/>)
                })}
            </div>
        </div>

</div>
    )
}
