import React from 'react'
import ProjectCard from './projectcard/ProjectCard'
import ProjectData from '../data/data_projects'
import uuidv4 from 'uuid/v4'

export default function CatalogSection() {
    return (
        <>  
            {ProjectData.map((path,index) => {
                    return <ProjectCard key={uuidv4()} title={path.title} description={path.description} categories={path.categories} languages={path.languages} imageSrc={path.imageSrc} skills={path.skills} links={path.links} date={path.date}/>           
            })}
        </>
    )
}
