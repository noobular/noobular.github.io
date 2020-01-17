import React from 'react';
import logo from '../img/logo.png';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-md navbar-dark primary sticky-top shadow ">
            <Link to={""}  class="navbar-brand"><img class="navbar-brand-img" src={logo} alt="logo"/></Link>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <Link to={"/highlights"} class="nav-item nav-link active hvr-grow-shadow">Highlights</Link>
                        <Link to={"/projectcatalog"} class="nav-item nav-link hvr-grow-shadow">Project Catalog</Link>
                        <Link to={"/experience"} class="nav-item nav-link hvr-grow-shadow">Experience</Link>
                    </div>
                    <div class="navbar-nav ml-auto">
                        <a href="http://www.github.com/noobular" class="nav-item nav-link text-black hvr-grow-shadow"><i class="fab fa-github"/></a>
                        <a href="https://www.Linkedin.com/in/jamesebyrnes/" class="nav-item nav-link text-black hvr-grow-shadow"><i class="fab fa-linkedin"/></a>
                        <a href="https:/google.com/" class="nav-item nav-link text-black hvr-grow-shadow"><i class="far fa-envelope"/></a>
                    </div>
            </div>
        </nav>
    )
}
