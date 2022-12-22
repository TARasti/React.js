import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        getProjects();
    }, []);
    const getProjects = async () => {
        try{
            const resp = await fetch("http://localhost:8080/projects");
            const data = await resp.json();
            setProjects(data);            
        } catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            <Navbar/>
            <div className="center-projects">
            <h2>Projects</h2>
            <div className="d-flex flex-wrap justify-content-center projects">
                {
                    projects.data?projects.data.map(d=>(
                        <Project key={d.id} id={d.id} title={d.title} image={d.image} description={d.description} link={d.code_link}/>
                        
                    )):""
                }
             
            </div>
            </div>
        </div>
    );
}

export default Projects;