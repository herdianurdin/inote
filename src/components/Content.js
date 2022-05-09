import React, { useState } from 'react'
import ContentEdit from './ContentEdit'
import ContentView from './ContentView'

const Content = React.memo(({ activeNote, onUpdateNote }) => {
  const [isView, setIsView] = useState(true)

  const handleContentNav = (e) => {
    document
      .querySelectorAll('.content-nav div')
      .forEach((button) => button.classList.remove('active'))

    e.target.classList.add('active')
    setIsView(e.target.id === 'view')
  }

  const handleViewOnUpdate = () => {
    document
      .querySelectorAll('.content-nav div')
      .forEach((button) => button.classList.remove('active'))

    document.querySelector('#view').classList.add('active')
    setIsView(true)
  }

  if (!activeNote) {
    return (
      <div className='content'>
        <div className='content-not-found'>
          <svg viewBox='3 -1.597 24 24'>
            <path d='M 10 7.403 L 20 7.403 L 20 9.403 L 10 9.403 L 10 7.403 Z M 10 11.403 L 15 11.403 L 15 13.403 L 10 13.403 L 10 11.403 Z M 24 4.403 L 24 18.403 C 24 19.506 23.103 20.403 22 20.403 L 8 20.403 C 6.897 20.403 6 19.506 6 18.403 L 6 4.403 C 6 3.3 6.897 2.403 8 2.403 L 11 2.403 L 11 0.403 L 13 0.403 L 13 2.403 L 17 2.403 L 17 0.403 L 19 0.403 L 19 2.403 L 22 2.403 C 23.103 2.403 24 3.3 24 4.403 Z M 22.002 18.403 L 22 5.403 L 8 5.403 L 8 18.403 L 22.002 18.403 Z' />
          </svg>
          <h2>No note selected</h2>
        </div>
      </div>
    )
  }

  return (
    <div className='content'>
      <div>
        <div className='content-nav'>
          <div id='view' onClick={handleContentNav} className='active'>
            View
          </div>
          <div id='edit' onClick={handleContentNav}>
            Edit
          </div>
        </div>
        {isView ? (
          <ContentView note={activeNote} />
        ) : (
          <ContentEdit
            note={activeNote}
            onUpdateNote={onUpdateNote}
            handleViewOnUpdate={handleViewOnUpdate}
          />
        )}
      </div>
    </div>
  )
})

export default Content
