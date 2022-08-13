import Header from './components/Header';
import Notes from './components/Note';
import Footer from './components/Footer';
// import notes from './components/notes.js';
import AddNotes from './components/AddNotes';
import { useState } from 'react';



function App() {
  const [notes,setNote] = useState([]);
  // const [values,setValues] = useState(['','']);
  function CreateNote(note){
    if((note.title!=='') || (note.content!=='')){
      setNote((prevNote)=>{
        return [...prevNote,note];
      });
    }
    console.log(notes);
  }
  function DeleteNote(id){
    setNote((prevNote)=>{
      const newnotes = prevNote.filter((note,index)=>{return index!==id});
      return [...newnotes];
    })
  }

  // function SetValues(title,content){
  //   setValues([title,content])
  // }


  return (
    <div className="App">
      <Header />
      <AddNotes CreateNote={CreateNote}></AddNotes>
      {
        notes.map((note,id)=>{
          return <Notes
            key = {id}
            id = {id}
            title = {note.title}
            content = {note.content}
            time = {note.time}
            delete = {DeleteNote}
            // onClick = {SetValues}
          />
        })
      }    
      <Footer></Footer>
    </div>
  );
}

export default App;
