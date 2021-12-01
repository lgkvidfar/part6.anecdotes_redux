import React,{useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterAnecdotes from './components/FilterAnecdotes'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  })
  return (
    <div>
      <Notification /> <br/>
      <FilterAnecdotes />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App