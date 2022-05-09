import React, { useEffect, useState } from 'react'
import Note from './Note'

const Sidebar = React.memo(
  ({ notes, activeNote, setActiveNote, onAddNote, onDeleteNote }) => {
    const [sortedNotes, setSortedNotes] = useState(notes)
    const [searchKeyword, setSearchKeyword] = useState('')

    const handleShowMenu = () => {
      document.querySelector('.sidebar').classList.toggle('show')
      document.querySelector('.close').classList.toggle('active')
      document.querySelector('.open').classList.toggle('active')
    }

    const handleSearch = () => {
      const searchNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
      setSortedNotes(searchNotes)
    }

    const handleSearchEnter = (e) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }

    useEffect(() => setSortedNotes(notes), [notes])

    return (
      <div className='sidebar show'>
        <div className='sidebar-menu'>
          <svg viewBox='12.953 25.838 24 24' onClick={handleShowMenu}>
            <path
              className='close active'
              d='M 29.453 31.838 L 24.952 36.337 L 20.453 31.838 L 18.953 33.338 L 23.452 37.837 L 18.953 42.337 L 20.453 43.837 L 24.952 39.337 L 29.453 43.837 L 30.953 42.337 L 26.454 37.837 L 30.953 33.338 L 29.453 31.838 Z'
            />
            <path
              className='open'
              d='M 16.953 31.838 L 32.953 31.838 L 32.953 33.838 L 16.953 33.838 L 16.953 31.838 Z M 16.953 36.838 L 32.953 36.838 L 32.953 38.838 L 16.953 38.838 L 16.953 36.838 Z M 16.953 41.838 L 32.953 41.838 L 32.953 43.838 L 16.953 43.838 L 16.953 41.838 Z'
            />
          </svg>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-header'>
            <h1>Inote</h1>
            <div className='btn-new-note' onClick={onAddNote}>
              New note
            </div>
          </div>
          <div className='sidebar-search'>
            <input
              type='text'
              id='search'
              onKeyDown={handleSearchEnter}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder='Search note...'
            />
            <div className='btn-search' onClick={handleSearch}>
              <svg viewBox='27.843 4.443 24 24'>
                <path d='M 38.49 23.089 C 40.264 23.089 41.988 22.494 43.387 21.401 L 47.783 25.797 L 49.197 24.383 L 44.801 19.987 C 45.894 18.589 46.489 16.864 46.49 15.089 C 46.49 10.678 42.901 7.089 38.49 7.089 C 34.079 7.089 30.49 10.678 30.49 15.089 C 30.49 19.5 34.079 23.089 38.49 23.089 Z M 38.49 9.089 C 41.799 9.089 44.49 11.78 44.49 15.089 C 44.49 18.398 41.799 21.089 38.49 21.089 C 35.181 21.089 32.49 18.398 32.49 15.089 C 32.49 11.78 35.181 9.089 38.49 9.089 Z' />
              </svg>
            </div>
          </div>
          <div className='notes'>
            {sortedNotes
              .sort((a, b) => b.updatedAt - a.updatedAt)
              .map((note, index) => (
                <Note
                  key={index}
                  note={note}
                  activeNote={activeNote}
                  setActiveNote={setActiveNote}
                  onDeleteNote={onDeleteNote}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
)

export default Sidebar
