import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <Link to='/' className="navbar-brand">
                    <h2 className="portfolio">Portfolio</h2>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto float-left">
                        <Link to='/' className="nav-links">Home</Link>
                        <Link to='/projects' className="nav-links">Projects</Link>
                        <Link to='/education' className="nav-links">Education</Link>
                        <Link to='/about' className="nav-links">About</Link>
                        <Link to='/contact' className="nav-links">Contact</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;