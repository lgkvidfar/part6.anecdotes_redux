import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNewNotification,stopNotification } from '../reducers/notificationReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdoteInput.value
        event.target.anecdoteInput.value=''
        dispatch(createAnecdote(content))
        dispatch(setNewNotification(content))
        setTimeout(() => dispatch(stopNotification()), 3000)
    }

    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name="anecdoteInput"/></div>
          <button  type="submit" >create</button>
        </form>
        </div>
    )
}

export default NewAnecdote