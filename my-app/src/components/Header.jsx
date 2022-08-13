import React from 'react';
import Heading from './Heading';
import NoteIcon from '@mui/icons-material/Note';

function Header(){
    return <header className='header'>
        <h1>
           <NoteIcon/> Keeper
        </h1>
        <div className="greeting">
        <Heading ></Heading>
        </div>
        
    </header>;
}

export default Header;