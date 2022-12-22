import React from "react";
import Navbar from "../components/Navbar";

const Education = () => {
    return (
        <div>
            <Navbar/>
            <div className="center">
            <h2>Education</h2>
                <div class="education">
                    <h2 class="edu-level">Bachelor in Computer and Information Sciences</h2>
                    <h3 class="uni">Pakistan Institue of Engineering and Applied Sciences, Islamabad</h3>
                    <p>CGPA: 3.53/4.00</p>
                </div>
            </div>
        </div>
    );
}

export default Education;