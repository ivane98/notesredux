import VisibilityFilter from './components/VisibilityFilter'
import NewNote from './NewNote'
import Notes from './Notes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAll } from './services/notes'
import { setNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getAll().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
