import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function AddNotes(props){
   
    const [title,setTitle] = useState('');
    const [note,setNote] = useState('');
    const [isZoom,setZoom] = useState(false);
    function getTitle(event){
        setTitle(event.target.value);
    }
    function getNote(event){
        setNote(event.target.value);
    }
    function SendData(){
        const currentTime = new Date();
        // const time = currentTime.getHours()+":"+currentTime.getMinutes();
        const date = currentTime.getMonth()+"/"+currentTime.getDate()+"/"+currentTime.getFullYear();
        props.CreateNote({
            "title": title,
            "content": note,
            "time": date
        });
        setTitle('');
        setNote('');
    }
    function zoomEffect(){
        setZoom(true);
    }
    return (
        <div className='addnote'>
            <form className='createnotes'>
                {isZoom? <input className='title' type="text" placeholder='Title' onChange={getTitle} value={title}/> : null}
                <textarea className='note' placeholder='Take a note...' rows={isZoom? 3:1} onChange={getNote} value={note} onClick={zoomEffect}/>
                {isZoom? <Zoom in={isZoom}>
                    <Fab color="primary" size='small' aria-label="add" onClick={SendData}>
                    <AddIcon />
                    </Fab> 
                </Zoom> : null}
            </form>
        </div>
    );
}

export default AddNotes;