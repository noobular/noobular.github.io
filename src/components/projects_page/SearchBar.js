import React from 'react'

export default function SearchBar(props) {
    return (
        <div className="container" style={{marginTop:20}}>
            <div className="col-sm-12">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by Technology..." onChange={props.handleInput}/>
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-search" style={{fontSize:18}}></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
