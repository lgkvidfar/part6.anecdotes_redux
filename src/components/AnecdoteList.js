import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVoteOf } from '../reducers/anecdoteReducer'
import { timedMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const handleVote = () => {
         dispatch(toggleVoteOf(anecdote))
         dispatch(timedMessage(`lastest vote: ${anecdote.content}`, 2))
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

    // I prefer useSelector x2 because it doesn't use let and is easier to read, but i understand accessing the state two seperate times is not as clean
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const filteredAnecdotes = anecdotes.filter(a => 
        a.content.toLowerCase()
        .includes(filter.toLowerCase()))
    // const anecdotes = useSelector(({ filter, anecdotes }) => {
    //     let filteredAnecdotes = anecdotes
    //     if(filter) {
    //         filteredAnecdotes = anecdotes.filter(a =>
    //             a.content.toLowerCase().includes(filter.toLowerCase()))
    //     }  
    //     return filteredAnecdotes
    // })
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