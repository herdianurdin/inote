import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

const Home = React.memo(() => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  )
  const [activeNote, setActiveNote] = useState(false)

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '',
      body: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    setNotes([...notes, newNote])
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === activeNote ? updatedNote : note
    )

    setNotes(updatedNotes)
  }

  const onDeleteNote = (noteId) => {
    setActiveNote(noteId === activeNote ? false : activeNote)
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  const getActiveNote = () => notes.find((note) => note.id === activeNote)

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes])

  return (
    <>
      <main>
        <Sidebar
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
        />
        <Content activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </main>
    </>
  )
})

export default Home
