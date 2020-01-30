import React from 'react'
import uuidv4 from 'uuid/v4'
import ModalImage from "react-modal-image";

export default function ProjectCard(props) {
    return (
<div className="project-card-container col-sm-12 col-md-6 col-lg-4 col-xl-3" alt={uuidv4()}>
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
                <p className="card-text">{props.description}</p>
                <div className="skillList text-right">
                        <ul className="list-group list-group-flush">
                            <h4 style={{marginRight:20}}>Implemented / Learned</h4>
                            {/* places each skill into the group*/}
                            {props.skills.map((skill,index) => {
                                return <li className="list-group-item" style={{paddingLeft:0}} key={uuidv4()}><div>{skill}</div></li>
                            })}
                        </ul>
                </div>
            </div>
            <div className="card-footer solidred" style={{padding:4, paddingTop:10}}>

                {props.links.map((link,index) => {
                    if(link[1] !== ""){
                        return(<a key={uuidv4()} style={{marginRight:5,float:'right'}} className="btn btn-light waves-effect waves-light" target="_blank" rel="noopener noreferrer" href={link[1]}>{link[0]}</a>)
                    }
                    return null;
                })}
                    
                {props.languages.map((language,index) =>{
                    let classna = "devicon-" + language +"-plain text-white"
                    return (<i className={classna.toLowerCase()} key={uuidv4()} style={{marginRight:10}}/>)
                })}
            </div>
        </div>

</div>
    )
}
