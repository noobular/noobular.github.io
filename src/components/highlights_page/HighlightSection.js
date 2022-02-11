import React from 'react'
import HighlightCard from './HighlightCard'
import ProjectData from '../data/data_projects'

import uuidv4 from 'uuid/v4'

export default function HighlightSection() {
    return (
        <>  <div style={{}}>
                {ProjectData.map((path,index) => {
                    if(index <= 7){
                        return (<HighlightCard key={uuidv4()} title={path.title} description={path.description} categories={path.categories} technologies={path.technologies} imageSrc={path.imageSrc} skills={path.skills} links={path.links} date={path.date}/>)
                    }
                    return (null)                
                })}
            </div>
        </>
    )
}
