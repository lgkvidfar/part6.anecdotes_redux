import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { timedMessage } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()

        const content = event.target.anecdoteInput.value
        event.target.anecdoteInput.value=''

        props.createAnecdote(content)

        props.timedMessage(`${content} added to list of blogs`, 2)
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

export default connect(null, {createAnecdote, timedMessage}) (NewAnecdote)