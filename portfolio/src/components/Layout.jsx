import React, { useEffect, useState } from "react";
import UploadProject from "../screens/UploadProject";


const Layout = (props) => {
    const [show, setShow] = useState(false);
    useEffect(()=>{

    },[show]);
    const edit = () => {
        setShow(!show);
    }
    const deleteProject = async () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you sure you want to delete?")){
            props.func(props.id);
        }
    }
    const update = (data) => {
        props.update(props.id,data);
    }
    const func = () =>{
    }
    const move_up = () => {
        props.up(props.id);
    }
    const move_down = () => {
        props.down(props.id);
    }
    return (
        <div className="layout m-3">
            <div className="d-flex justify-content-between m-2 p-2">
                <div className="d-flex">
                    <h4 className="m-1">Project: </h4>
                    <h4 className="m-1">{props.title}</h4>
                </div>            
                <div>                
                    <button onClick={edit} className="btn btn-warning btn-sm m-1" style={{color:"#fff"}}><i class="fa-solid fa-pen-to-square"></i></button>|
                    <button onClick={()=>{props.d_o<2?func():move_up();}} className={props.d_o<2?"btn-ani btn btn-sm m-1":"btn btn-primary btn-sm m-1"}><i class="fa-solid fa-chevron-up"></i></button>        
                    <button onClick={()=>{(props.d_o===props.max_d_o)?func():move_down();}} className={props.d_o===props.max_d_o?"btn-ani btn btn-sm m-1":"btn btn-primary btn-sm m-1"}><i class="fa-solid fa-chevron-down"></i></button>|
                    <button onClick={deleteProject} className="btn btn-danger btn-sm m-1"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            {
                show?<><hr className="line"></hr><UploadProject key={props.id} title={props.title} img={props.img} desc={props.desc} link={props.link} func={update}/></>:""
            }
            
        </div>
    );
}

export default Layout;