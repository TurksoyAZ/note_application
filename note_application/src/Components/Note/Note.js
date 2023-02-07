import React from 'react'
import './Note.css'
import { GoTrashcan } from 'react-icons/go';

function Note({ id, text, date,deletNote }) {
  return (
    <article className='containerNote'>
      <div className='divNote1'>
        <p>{text}</p>
      </div>
      
      <div className='divNote2'>
        <span>{date}</span>
        <small onClick={()=> deletNote(id)}> <GoTrashcan/>  </small>
      
      </div>

    </article>
  )
}

export default Note