/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UploadProjects = (props=null) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    useEffect(()=>{
        setTitle(props.title); setImage(props.img); setDescription(props.desc); 
        setLink(props.link);
    },[props.desc, props.img, props.link, props.title]);
    const confirmation = () => {
        if (!title) {
            alert("Title field is required");
            return false;
        } else if (!image) {
            alert("Image is required");
            return false;
        } else if (!link) {
            alert("Link is required");
            return false;
        } else if(!description) {
            alert("Description is required");
            return false;
        } else{
            return true;
        }
    }
    const uploadData = async () => {        
        if(confirmation()) {
            if (confirm("Are you sure?")) {
                try {
                    await fetch("http://localhost:8080/projects", {
                        method: "POST",
                        body: JSON.stringify({
                            "title" : title,
                            "image" : image,
                            "description" : description,
                            "code_link" : link
                        }),
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    });
                    alert('Data has been saved');
                    setTitle('');setImage('');setLink('');setDescription('');
                } catch (e) {
                    console.log(e);
                    alert('Upload failed. Something went wrong.');
                }
            }
        }                
    }
    const update = () => {
        if (confirmation()) {
            if (confirm("Are you sure?")) {
                const data = {
                    title: title,
                    image: image,
                    code_link: link,
                    description: description
                }
                props.func(data);
            }
        }
        
    }
    return (
        <div className="upload-center d-flex justify-content-center">
            <div>
                <div className="d-flex justify-content-between">
                    <h2>{props.func?"Update Project Data":"Upload Project Data"}</h2>
                    {!props.func?<Link to="/layout" className="btn btn-primary btn-sm m-2">Go To Layout</Link>:""}
                </div>            
                <form className="form">
                    <div class="form-group">
                        <label for="title-field">Project Title</label>
                        <input class="form-control" id="title-field" type="text" placeholder="Project title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="image-field">Project Image</label>
                        <input class="form-control" id="image-field" type="text" placeholder="Project image..." value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="link-field">Code Link</label>
                        <input class="form-control" id="link-field" type="text" placeholder="Code Link..." value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="desc-field">Project Description</label>
                        <textarea class="form-control" id="desc-field" type="text" placeholder="Project description..." value={description} rows="10" onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <button className="btn btn-success btn-md" type="button" onClick={()=>{props.func?update():uploadData();}}>Upload</button>
                </form>
            </div>
        </div>
    );
}

export default UploadProjects;