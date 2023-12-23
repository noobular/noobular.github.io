import React from 'react'

import ModalImage from "react-modal-image";

export default function ProjectCard(props) {
    return (
<div className="project-card-container col-sm-12 col-md-6 col-lg-4 col-xl-3" alt={crypto.randomUUID()}>
        <div className="project-card card na shadow p-4 mb-4">
            <h4 className="card-header solidred text-white">{props.title}</h4>

            <ModalImage 
                className="card-img col-12 col-xl-6 na modalImage"
                style={{backgroundColor:'black'}}
                small={props.imageSrc[0]}
                large={props.imageSrc[0]}
                hideDownload={true}
                hideZoom={false}
                alt={props.title}
            />

            <div className="card-body" style={{marginBottom:64}}>
            <h4>Project Description</h4>
                <p className="card-text">
                    {props.description}
                </p>
                <div className="skillList text-right">
                        <ul className="list-group list-group-flush">
                            <h4 style={{marginRight:20}}>Implemented / Learned</h4>
                            {/* places each skill into the group*/}
                            {props.skills.map((skill,index) => {
                                return <li className="list-group-item" key={crypto.randomUUID()}  style={{paddingLeft:0}}><div>{skill}</div></li>
                            })}
                        </ul>
                </div>
                <div className="TechTree" style={{margin:20}}>
                    <h4 className="card-title">Technologies</h4>
                        {props.technologies.map((technology,index) => {
                            if(index < 4){
                                return <li className="list-group-item " key={crypto.randomUUID()} style={{border:0}}>
                                            <div>
                                                <i style={{fontSize:20, marginRight:10}} className={"align-middle far fa-dot-circle"}/>
                                                {"   " + technology}
                                            </div>
                                        </li>
                            }

                            return null
                        })}
                </div>

                <div class="text-black lastUpdateText"><i class="fas fa-history" style={{fontSize:20}}></i> Last Update: {props.date}</div>

            </div>
            <div className="card-footer solidred">

                {props.links.map((link,index) => {
                    if(link[1] !== ""){
                        return(<a key={crypto.randomUUID()} style={{marginRight:5,float:'right'}} className="btn btn-light waves-effect waves-light" target="_blank" rel="noopener noreferrer" href={link[1]}>{link[0]}</a>)
                    }
                    return null;
                })}

            </div>
        </div>

</div>
    )
}
