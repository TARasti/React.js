import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Notes(props) {
    return <div className="notes" /*onClick={props.onClick(props.content)}*/>
        <h3 className="notestitle">{props.title}</h3>
        <p className="content">{props.content}</p>
        <div className="notefooter">
            <p className="time">{props.time}</p>
            <button className='deletebtn' onClick={()=>props.delete(props.id)}><DeleteIcon></DeleteIcon></button>
        </div>
    </div>;
}

export default Notes;