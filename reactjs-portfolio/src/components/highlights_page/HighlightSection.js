import React from 'react'
import HighlightCard from '../highlights_page/highlightcard/HighlightCard'
import ProjectData from '../data/data_projects'

import uuidv4 from 'uuid/v4'

export default function HighlightSection() {
    return (
        <>  <div style={{marginTop:40}}>
                {ProjectData.map((path,index) => {
                    if(index <= 7){
                        return (<HighlightCard key={uuidv4()} title={path.title} description={path.description} categories={path.categories} languages={path.languages} imageSrc={path.imageSrc} skills={path.skills} links={path.links} date={path.date}/>)
                    }
                    return (null)                
                })}
            </div>
        </>
    )
}
