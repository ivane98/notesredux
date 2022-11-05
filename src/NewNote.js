import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from './reducers/noteReducer'
import { createNew } from './services/notes'

function NewNote(props) {
  const dispatch = useDispatch()
  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    const newNote = await createNew(content)
    dispatch(createNote(newNote))
  }
  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote
