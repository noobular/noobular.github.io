import React from 'react';
import logo from './resources/logo.png';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark primary sticky-top shadow ">
            <Link to={""}  className="navbar-brand" style={{marginLeft:10}}><img className="navbar-brand-img" src={logo} alt="logo"/></Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
                        <Link to={"/highlights"} className="nav-item nav-link active hvr-grow-shadow">Highlights</Link>
                        <Link to={"/projects"} className="nav-item nav-link hvr-grow-shadow">Project Catalog</Link>
                        <Link to={"/experiences"} className="nav-item nav-link hvr-grow-shadow">Experience</Link>
                    </div>
                    <div className="navbar-nav ml-auto hide-on-sm" data-target=".navbar-collapse" data-toggle="collapse">
                        <div class="container">
                            <a href="http://www.github.com/noobular" target="_BLANK" rel="noopener noreferrer" className="nav-item nav-link text-black hvr-grow-shadow"><i className="fab fa-github"/></a>
                            <a href="https://www.Linkedin.com/in/jamesebyrnes/" target="_BLANK"  rel="noopener noreferrer" className="nav-item nav-link text-black hvr-grow-shadow"><i className="fab fa-linkedin"/></a>
                            <a  href="mailto:JamesEdwardByrnes@gmail.com"         target="_top"    rel="noopener noreferrer" className="nav-item nav-link text-black hvr-grow-shadow"><i className="far fa-envelope"/></a>
                        </div>
                    </div>
            </div>
        </nav>
    </>
    )

}
 