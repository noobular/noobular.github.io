import React from 'react'
import ProjectCard from './ProjectCard'


export default function ProjectSection(props) {
    let projects = props.data.map( (project) => {
        return <ProjectCard key={crypto.randomUUID()} title={project.title} description={project.description} categories={project.categories} technologies={project.technologies} imageSrc={project.imageSrc} skills={project.skills} links={project.links} date={project.date}/>                 
    });
    return (
        <>  
            <div className="row card-row" style={{margin:15, marginTop:5}}>
                {projects}
            </div>
        </>
    )
}



