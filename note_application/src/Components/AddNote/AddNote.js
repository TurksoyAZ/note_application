import React from 'react'
import './AddNote.css'

function AddNote({ addNote }) {

  const [input, setInput] = React.useState('')
  const remaining = 400

  const handleChnage = (e) => {
    if (remaining - e.target.value.length >= 0) {
      setInput(e.target.value)
    }
  }

  const getSave = (parametr) => {
    if (input) {
      addNote(parametr)
      setInput('')
    } return false
  }

  return (
    <article className='containerAddNote'>

      <textarea cols="20" rows="14" placeholder='Type here' value={input} onChange={handleChnage}></textarea>

      <div className='divAddNote'>
        <span>{remaining - input.length} Remaining</span>
       
        <button type='submit' onClick={() => getSave(input)}>Save</button>

      </div>

    </article>
  )
}

export default AddNote