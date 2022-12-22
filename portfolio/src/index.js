import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Projects from './screens/Projects';
import About from './screens/About';
import Contact from './screens/Contact';
import Education from './screens/Education';
import UploadProjects from './screens/UploadProject';
import ProjectsLayout from './screens/ProjectsLayout';

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/upload' element={<UploadProjects/>}/>
            <Route path='/layout' element={<ProjectsLayout/>}/>
          </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));