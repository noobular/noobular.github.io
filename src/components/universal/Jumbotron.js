import React from 'react';
import { Parallax } from 'react-parallax';

export default function Jumbotron() {
    return (
        <>

        <Parallax
            blur={20}
            bgImage={require('./resources/parallax.png')}
            bgImageAlt={crypto.randomUUID()}
            strength={500}
        >   

                        <div id="Jumbotron" className="container">
                            <div id="jumbotron-content" style={{color:"white"}}>
                                <h1 className="d-flex justify-content-center jumbo_name">James Byrnes</h1>
                                <p  className="d-flex justify-content-center jumbo_description">Software Developer - NodeJS / ReactJS Developer</p>

                                <p  className="d-flex justify-content-center">
                                    <a href="mailto:JamesEdwardByrnes@gmail.com"         target="_top"    rel="noopener noreferrer" className="jumbotron-text  btn btn-outline-light" > <i className="icon far fa-envelope"/> Email</a>
                                    <a href="https://www.github.com/noobular"            target="_BLANK"  rel="noopener noreferrer" className="jumbotron-text  btn btn-outline-light btn-lg"><i className="icon fab fa-github"/> Github</a>
                                    <a href="https://www.Linkedin.com/in/jamesebyrnes/"  target="_BLANK"  rel="noopener noreferrer" className="jumbotron-text btn btn-outline-light btn-lg"><i className="icon fab fa-linkedin"/> LinkedIn</a>   
                                </p>

                                <h5 className="d-flex justify-content-center" style={{fontSize:36,marginTop:50}}>Resume</h5>
                                <div className="d-flex justify-content-center">
                                    <a href="/pdf/Resume.pdf" target="_BLANK"  rel="noopener noreferrer" className="btn btn-outline-light btn-lg jumbotron-text" style={{margin:10}}><i className="icon far fa-file-pdf"></i> PDF</a>
                                    <a href="https://docs.google.com/document/d/15u3Bp8UwBhOdA5eKVRJly6UAHOkO_wW6W9Br2MRMjW0/edit?usp=sharing" target="_BLANK"  rel="noopener noreferrer" className="btn btn-outline-light btn-lg jumbotron-text" style={{margin:10}}><i className="icon fab fa-google-drive"></i> Google Doc</a>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="d-flex justify-content-center">
                            <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
                        </div>
        </Parallax>
        </> 
    )
}
