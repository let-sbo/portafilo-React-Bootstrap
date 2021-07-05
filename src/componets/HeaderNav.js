import React from 'react';

export default function HeaderNav (props){
    return(
        <header>
            <nav className="navbar navbar-primary bg-primary">
                <img src={props.navBrand} alt="logo" className="navbar-brand" width="70px"></img>
                <button className="navbar-toggler me-3 btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <a href={props.home} className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href={props.proyects} className="nav-link">Proyects</a>
                        </li>
                        <li className="nav-item">
                            <a href={props.contact} className="nav-link">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a href={props.footer} className="nav-link">Footer</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}