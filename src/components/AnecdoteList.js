import React,{ useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVoteOf } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote,handleClick }) => {
    return (
    <div>
        <li>
        {anecdote.content}
        </li>
    <div>
        has {anecdote.votes} 
        <button onClick={handleClick}> votes</button>
    </div>
  </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

    return (
        <ul>
            {sortedAnecdotes.map(a =>
                <Anecdote 
                key={a.id}
                anecdote={a}
                handleClick={() => dispatch(toggleVoteOf(a.id))
                }
            />
            )}
        </ul>
    )
}

export default Anecdotes