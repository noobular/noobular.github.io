import React from 'react';
import uuidv4 from 'uuid/v4'
import { Parallax } from 'react-parallax';

export default function Jumbotron() {
    return (
        <>

        <Parallax
            blur={20}
            bgImage={require('./resources/parallax.png')}
            bgImageAlt={uuidv4()}
            strength={500}
        >   

                        <div id="Jumbotron" className="container">
                            <div id="jumbotron-content" style={{color:"white"}}>
                                <h1 className="d-flex justify-content-center jumbo_name">James Byrnes</h1>
                                <p  className="d-flex justify-content-center jumbo_description">Software Developer - NodeJS / ReactJS Developer</p>
                                <p  className="d-flex justify-content-center">
                                    <a href="mailto:JamesEdwardByrnes@gmail.com"         target="_top"    rel="noopener noreferrer" className="jumbotron-text  btn btn-outline-danger" > <i className="far fa-envelope"/> Email</a>
                                    <a href="https://www.github.com/noobular"            target="_BLANK"  rel="noopener noreferrer" className="jumbotron-text  btn btn-outline-danger btn-lg"><i className="fab fa-github"/> Github</a>
                                    <a href="https://www.Linkedin.com/in/jamesebyrnes/"  target="_BLANK"  rel="noopener noreferrer" className="jumbotron-text btn btn-outline-danger btn-lg"><i className="fab fa-linkedin"/> LinkedIn</a>   
                                </p>
                                <hr className="my-1"/>
                                

                                <h5 className="d-flex justify-content-center" style={{fontSize:36,marginTop:50}}>Resume</h5>
                                <div className="d-flex justify-content-center">
                                    <a href="/pdf/Resume.pdf" target="_BLANK"  rel="noopener noreferrer" className="btn btn-outline-danger btn-lg jumbotron-text" style={{margin:10}}><i className="far fa-file-pdf"></i> PDF</a>
                                    <a href="https://docs.google.com/document/d/1l69iJdJAG4k8u19XkRy_A5ZbhpSjRuyZCcazsLGCm8g/edit?usp=sharing" target="_BLANK"  rel="noopener noreferrer" className="btn btn-outline-danger btn-lg jumbotron-text" style={{margin:10}}><i className="fab fa-google-drive"></i> Google Doc</a>
                                </div>
                            </div>
                        </div>
        </Parallax>
        </> 
    )
}
