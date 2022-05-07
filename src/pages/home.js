import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Content from '../components/content'
import Sidebar from '../components/sidebar'

const Home = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  )
  const [activeNote, setActiveNote] = useState(false)

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
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
}

export default Home
