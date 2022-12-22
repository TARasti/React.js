import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="center">
            <h2>About</h2>
                <div className="about-us">
                    <p className="a-content">
                        I'm Tanveer Ahmed Khan. I'm professional web developer at <strong><a href="https://www.sysreforms.com" target="_blank" rel="noreferrer">SysReforms International</a>.</strong> I completed my bachelor in Computer and Information Sciences from Pakistan
                        Institute of Engineering and Applied Sciences (PIEAS) Islamabad. I worked in different technologies and
                        frameworks like MERN, PHP(Codeigniter, Laravel), Python, Flutter etc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;