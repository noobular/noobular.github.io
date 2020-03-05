import React from 'react'
import uuidv4 from 'uuid/v4'
import ModalImage from "react-modal-image";


export default function ExperienceCard(props) {
    return (
        <div className="experience-card card col-12 shadow-sm ">
            <div className="row">

                    <div className="card-img col-12 col-xl-6 na">
                        <ModalImage 
                            className="card-img col-12 col-xl-6 na modalImage"
                            style={{backgroundColor:'black'}}
                            small={props.imageSrc[0]}
                            large={props.imageSrc[0]}
                            hideDownload={true}
                            hideZoom={false}
                            alt={props.title}
                        />
                    </div>

                    <div className="card-body col-12 col-xl-6 na" >
                            <div className="row na" style={{marginBottom:63}}>

                                <div className="col-12 col-xl-6">
                                    <div className="title-description" style={{margin:20}}>
                                        <h4 className="card-title">{props.title}</h4>
                                        <p className="card-text">{props.description}</p>
                                    </div>

                                    <div className="TechTree" style={{margin:20}}>
                                        <h4 className="card-title">Technologies</h4>
                                        {props.technologies.map((technology,index) => {
                                                return <li className="list-group-item " style={{border:0}}>
                                                            <div>
                                                                <i style={{fontSize:20, marginRight:10}} class={"align-middle far fa-dot-circle"}/>
                                                                {"   " + technology}
                                                            </div>
                                                        </li>
                                        })}
                                    </div>
                                </div>




                                <div className="col-12 col-xl-6 text-right" style={{marginBottom:63}}>
                                    <div style={{margin:20}}>
                                        <ul className="list-group list-group-flush">
                                            <h4>Implemented</h4>
                                            {/* places each skill into the group*/}
                                            {props.integrated.map((integrate,index) => {
                                                return <li className="list-group-item"><div>{integrate}</div></li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            
                            </div>
                            
                            <div className="card-footer primary">
                                {props.links.map((link,index) => {
                                    if(link[1] !== undefined){
                                        console.log(link)
                                        return(<a style={{marginRight:4,float:'right'}} className="btn btn-light  float-right hvr-grow-shadow text-black" target="_blank" rel="noopener noreferrer" key={uuidv4()} href={link[1]}>{link[0]}</a>)
                                    }
                                    return null; 
                                })}

                            </div>
                    </div>

            </div>
        </div>
    )
}