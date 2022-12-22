import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
    return (
        <div>
        <Navbar/>
            <div className="text-center justify-content-center center">
            
                <div id="welcome-text">
                    <h1>WELCOME TO MY PORTFOLIO</h1>
                    <h2>I'm Tanveer Ahmed Khan</h2>
                    <h3>Web Developer at <em><a className="links" href="https://www.sysreforms.com" target="_blank" rel="noreferrer">SysReforms International</a></em></h3>
                </div>
                <div id="home-screen-btn">
                    <a href="https://tarasti.github.io/Tanveer-Portfolio/assets/resume/resume.pdf" target="_blank" rel="noreferrer" download="Tanveer's_resume.pdf" className="btn btn-outline-primary btn-lg custom-btn">Get Resume</a>
                    <Link to="/about"><button className="btn btn-outline-warning btn-lg custom-btn">About Me</button></Link>
                </div>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/tanveer-ahmed-khan-465bab204" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2x icons"></i></a>
                    <a href="https://github.com/TARasti" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github fa-2x icons"></i></a>
                    <a href="mailto: ktanveerahmed8@gmail.com" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope fa-2x icons"></i></a>
                </div>
                <span className="copyright">Copyright © 2022, Developed by Tanveer Ahmed Khan</span>
            </div>
        </div>
    );
}

export default Home;