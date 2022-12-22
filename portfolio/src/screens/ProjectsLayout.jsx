import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const ProjectsLayout = () => {
    const [projects, setProjects] = useState([]);
    const [state, setState] = useState(false);
    useEffect(()=>{
        getProjects();
    }, [state]);
    const getProjects = async () => {
        try {
            const res = await fetch("http://localhost:8080/projects");
            const data = await res.json();            
            setProjects(data);
        } catch (e) {
            console.log(e);
        }
    }
    const updateProject = async (id,obj) => {
        try {
            await fetch("http://localhost:8080/projects/"+id, {
                method : "PUT",
                body:JSON.stringify(obj),
                headers : {
                    'Content-Type' : 'application/json'
                }
            });
            setState(!state);
        } catch (e) {
            console.log(e);
        }
    }
    const delete_project = async (id) => {
        try {
            await fetch("http://localhost:8080/projects/"+id, {
                method : "DELETE"
            });                        
            setState(!state);
        } catch (e) {
            console.log(e);
        }
    }
    const move_up = async (id) => {
        try {
            await fetch("http://localhost:8080/move/"+id+"/1");
            setState(!state);
        } catch (e) {
            console.log(e);
        }
    }
    const move_down = async (id) => {        
        try {
            await fetch("http://localhost:8080/move/"+id+"/2");
            setState(!state);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="main-layout">
            <div className="d-flex justify-content-between">
                <h2>Projects: Layout</h2>
                <Link to="/upload" className="btn btn-primary btn-sm m-2">Go To Upload</Link>
            </div>
            
            {
                projects.data?projects.data.map(d=>(
                    <Layout key={d.id} id={d.id} title={d.title} img={d.image} desc={d.description}
                     link={d.code_link} d_o={d.display_order} max_d_o={projects.max_display_order}
                      func={delete_project} up={move_up} down={move_down}
                      update={updateProject}
                    />
                )):""
            }
        </div>
    );
}

export default ProjectsLayout;