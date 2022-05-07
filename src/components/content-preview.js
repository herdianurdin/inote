import React from 'react'

const ContentPreview = React.memo(({ note }) => {
  return (
    <div className='content-preview'>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </div>
  )
})

export default ContentPreview
