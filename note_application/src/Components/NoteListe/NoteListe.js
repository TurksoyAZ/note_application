import React from 'react'
import AddNote from '../AddNote/AddNote'
import Note from '../Note/Note'
import './NoteListe.css'

function NoteListe({ data, addNote, deletNote }) {
    return (
        <section className='containerNoteListe'>

            {data.map((items, index) => (
                <Note
                    key={index}
                    id={items.id}
                    text={items.text}
                    date={items.date}
                    deletNote={deletNote}
                />
            ))}

            <AddNote addNote={addNote}  />

        </section>
    )
}

export default NoteListe