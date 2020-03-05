import React, { Component } from 'react'

//JSON Data
import ProjectData from '../components/data/data_projects'

//Components
import CatalogSection from '../components/projects_page/ProjectSection'
import SearchBar from '../components/projects_page/SearchBar'

export default class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects:[ProjectData],
            searchQuery:''
        }
    }

    handleInput = (event) => {
        console.log(event.target.value)
        this.setState({searchQuery: event.target.value})
    }


    render() {

        let filteredProjects = this.state.projects[0].filter((project) => {
            if(this.state.searchQuery === '' || this.state.searchQuery === undefined) {
                // if there is no query, or is undefined, just return the project (this should mean that nobody is trying to search for anything specific, let everything through)
                return project
            }else{
                // the search query has something in it, most likely the person is trying to search for something.
               return project.technologies.some((technology,index)=>{
                    if(technology.toLowerCase().includes(this.state.searchQuery.toLowerCase())){
                        console.log(project)
                        return true
                    }
                    return false
                })
            }
        })
        
        return (
        <>
            <SearchBar handleInput={this.handleInput}/>
            <CatalogSection data={filteredProjects} />
        </>
        )
    }
}

