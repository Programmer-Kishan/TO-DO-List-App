
import './App.css';
import React, {useState} from 'react'
import AdderPage from './components/AdderPage';
import Note from  './components/Note';

function App() {

  const [note, setNote] = useState([]);


  const addNote = (newNote) => {

      setNote((prevValue) => {
      return [...prevValue, newNote]
    })
    console.log(note)
  }

  const deleteNote = (noteIndex) => {
    const newNotes = note.filter((currEle, index) => {
      return index !== noteIndex
    })
    setNote(newNotes)
  }

  return (
    <>
      <AdderPage addNote = {addNote} />
      <Note notes = {note} deleteNote = {deleteNote}/>
      {/* <Note /> */}
    </>
  );
}

export default App;
