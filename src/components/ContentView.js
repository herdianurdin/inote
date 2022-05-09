import Parser from 'html-react-parser'
import React from 'react'

const ContentView = React.memo(({ note }) => {
  return (
    <div className='content-view'>
      <h2>{note.title.length === 0 ? 'Untitled Note' : note.title}</h2>
      <p>{Parser(note.body.replace(/(\r\n|\n|\r)/gm, '<br>'))}</p>
    </div>
  )
})

export default ContentView
