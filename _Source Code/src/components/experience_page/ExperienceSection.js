import React from 'react'
import ExperienceCard from './ExperienceCard'
import uuidv4 from 'uuid/v4'


export default function ExperienceSection(props) {
    let experiences = props.data.map((experience) => {
        return <ExperienceCard key={uuidv4()} title={experience.title} description={experience.description} categories={experience.categories} technologies={experience.technologies} imageSrc={experience.imageSrc} integrated={experience.integrated} links={experience.links} date={experience.date}/>                 
    });
    return (
        <>  
            <div className="row card-row" style={{margin:15, marginTop:5}}>
                {experiences}
            </div>
        </>
    )
}

