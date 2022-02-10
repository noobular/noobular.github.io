import React, { Component } from 'react'

//JSON Data
import ExperienceData from '../components/data/data_experiences'

//Components
import ExperienceSection from '../components/experience_page/ExperienceSection'
import SearchBar from '../components/projects_page/SearchBar'

export default class Experiences extends Component {
    constructor(props){
        super(props);

        this.state = {
            experiences:[ExperienceData],
            searchQuery:''
        }
    }

    handleInput = (event) => {
        console.log(event.target.value)
        this.setState({searchQuery: event.target.value})
    }


    render() {

        let filteredProjects = this.state.experiences[0].filter((experience) => {
            if(this.state.searchQuery === '' || this.state.searchQuery === undefined) {
                // if there is no query, or is undefined, just return the project (this should mean that nobody is trying to search for anything specific, let everything through)
                return experience
            }else{
                // the search query has something in it, most likely the person is trying to search for something.
               return experience.technologies.some((technology,index)=>{
                    if(technology.toLowerCase().includes(this.state.searchQuery.toLowerCase())){
                        console.log(experience)
                        return true
                    }
                    return false
                })
            }
        })
        
        return (
        <>
            <SearchBar handleInput={this.handleInput}/>
            <ExperienceSection data={filteredProjects} />
        </>
        )
    }
}

