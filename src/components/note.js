const Note = ({ note, activeNote, setActiveNote, onDeleteNote }) => {
  return (
    <div className='note'>
      <div
        className={`note-body ${activeNote === note.id && 'active'}`}
        onClick={() => setActiveNote(note.id)}
      >
        <h2>
          {note.title.length > 13
            ? note.title.substr(0, 13) + '...'
            : note.title}
        </h2>
        <p>
          {note.body.length > 39
            ? note.body.replace(/(\r\n|\n|\r)/gm, ' ').substr(0, 39) + '...'
            : note.body === ''
            ? '...'
            : note.body.replace(/(\r\n|\n|\r)/gm, ' ')}
        </p>
        <div className='timestamp'>
          Last Modified {new Date(note.updatedAt).toLocaleDateString('en-US')}
        </div>
      </div>
      <div className='note-trash' onClick={() => onDeleteNote(note.id)}>
        <svg viewBox='-0.338 -3.868 24 24'>
          <path d='M 5.662 3.132 L 4.662 3.132 L 4.662 16.132 C 4.662 17.237 5.557 18.132 6.662 18.132 L 16.662 18.132 C 17.767 18.132 18.662 17.237 18.662 16.132 L 18.662 3.132 L 5.662 3.132 Z M 16.28 0.132 L 14.662 -1.868 L 8.662 -1.868 L 7.044 0.132 L 2.662 0.132 L 2.662 2.132 L 20.662 2.132 L 20.662 0.132 L 16.28 0.132 Z' />
        </svg>
      </div>
    </div>
  )
}

export default Note
