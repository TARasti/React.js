import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className="center">
                <h2>Contacts Information</h2>
                <div className="contact-detail">
                    <h5>Email</h5>
                    <p className="item">ktanveerahmed8@gmail.com</p>
                    <h5>Mobile</h5>
                    <p className="item">+92 307 8326321</p>
                </div>
                <div id="icons">
                        <a href="https://www.linkedin.com/in/tanveer-ahmed-khan-465bab204" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2x icons"></i></a>
                        <a href="https://github.com/TARasti" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github fa-2x icons"></i></a>
                        <a href="mailto: ktanveerahmed8@gmail.com" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope fa-2x icons"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;