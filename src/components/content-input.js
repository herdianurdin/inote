import React, { useEffect, useState } from 'react'

const ContentInput = React.memo(({ note, onUpdateNote }) => {
  const [updatedNote, setUpdatedNote] = useState(note)

  const onEditField = (key, value) => {
    setUpdatedNote({
      ...updatedNote,
      [key]: value,
    })
  }

  useEffect(() => setUpdatedNote(note), [note])

  return (
    <div className='content-input'>
      <input
        type='text'
        id='title'
        placeholder='Title note'
        value={updatedNote.title}
        onChange={(e) => onEditField('title', e.target.value)}
      />
      <textarea
        id='body'
        placeholder='Text note...'
        value={updatedNote.body}
        onChange={(e) => onEditField('body', e.target.value)}
      />
      <div
        onClick={() =>
          onUpdateNote({
            ...updatedNote,
            updatedAt: Date.now(),
          })
        }
        className='button'
      >
        Save
      </div>
    </div>
  )
})

export default ContentInput
