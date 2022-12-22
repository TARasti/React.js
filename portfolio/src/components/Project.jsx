import React, { useState } from "react";

const Project = (props) => {
    const [display, setDisplay] = useState(false);
    const displayContent = (id) => {
        if(display){
            if(document.getElementById(id)){document.getElementById(id).style.display = "none";}
        } else {
            if(document.getElementById(id)){document.getElementById(id).style.display = "block";}
        }
        setDisplay(!display);
    }
    return (
        <div class="card align-self-start">
            <img class="card-img-top image-crop" src={props.image} alt="Card thumbnail"></img>
            <hr className="line"></hr>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p id={props.id} style={{display: "none"}} class="card-text">{props.description}</p>
            </div>
            <div class="card-body d-flex justify-content-between">
                <a href={props.link} class="card-link" target="_blank" rel="noreferrer">Show Code</a>
                <button className="show-more-btn" onClick={()=>{displayContent(props.id)}}>Show More</button>
            </div>
        </div>
    );
}

export default Project;