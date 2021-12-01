import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVoteOf } from '../reducers/anecdoteReducer'
import { setVoteNotification, stopNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const handleVote = () => {
         dispatch(toggleVoteOf(anecdote.id))
         dispatch(setVoteNotification(anecdote))
         setTimeout(() => dispatch(stopNotification()), 3000)
    }

    return (
    <div>
        <li>
        {anecdote.content}
        </li>
    <div>
        has {anecdote.votes} 
        <button type="button" onClick={handleVote}>votes</button>
    </div>
  </div>
    )
}

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter.toLowerCase())
    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => b.votes - a.votes)

    return (
        <ul>
            {sortedAnecdotes.map(a =>
                <Anecdote 
                key={a.id}
                anecdote={a}
            />
            )}
        </ul>
    )
}

export default Anecdotes