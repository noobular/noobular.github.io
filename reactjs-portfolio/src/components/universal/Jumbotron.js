import React from 'react';
import uuidv4 from 'uuid/v4'
import { Parallax } from 'react-parallax';

export default function Jumbotron() {
    return (
        <>

        <Parallax
            blur={20}
            bgImage={require('../img/parallax.png')}
            bgImageAlt={uuidv4()}
            strength={500}
        >   

                        <div className="container" style={{height:540}}>
                            <div style={{marginTop:200, color:"white"}}>
                                <h1 className="d-flex justify-content-center">Hello World!</h1>
                                <p className="d-flex justify-content-center">This is a portfolio piece, to show off my other creations.</p>

                                <h5 className="d-flex justify-content-center" style={{marginTop:50}}>My Resume</h5>
                                <div className="d-flex justify-content-center">
                                    <a href="www.itch.io/noobular"    className="btn btn-light hvr-grow-shadow text-danger p-2" style={{marginRight:5}}>Image</a>
                                    <a href="www.github.com/noobular" className="btn btn-light hvr-grow-shadow text-danger p-2" style={{marginRight:5}}>PDF</a>
                                    <a href="www.github.com/noobular" className="btn btn-light hvr-grow-shadow text-danger p-2" style={{marginRight:5}}>Google Doc</a>
                                </div>
                            </div>
                        </div>
        </Parallax>
        </> 
    )
}
