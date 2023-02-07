import React from 'react';
import './App.css';

import { nanoid } from 'nanoid'
import NoteListe from './Components/NoteListe/NoteListe';


function App() {

  const [data, setData] = React.useState([])


  const addNote = (parametr) => {
    let addDate = new Date()
    let day = addDate.getDate()
    let month = addDate.getMonth()
    let year = addDate.getFullYear()

    // for rest Date
    const a = day < 10 ? `0${day}` : day;
    const b = month < 10 ? `0${month}` : month;

    //for big small letter
    const setWrite= `${parametr.slice(0, 1).toUpperCase()}${parametr.slice(1).toLowerCase()}`

    const coming = {
      id: nanoid(),
      text: setWrite,
      date: `${a}.${b}.${year}`
    }
    const newData = [...data, coming]
    setData(newData)

  }


  const deletNote = (id) => {
    setData(data.filter((e) => e.id !== id))
  }

  return (
    <div className="App">
      <h1>My Notes</h1>

      <NoteListe data={data} addNote={addNote} deletNote={deletNote} />
    </div>
  );
}

export default App;
