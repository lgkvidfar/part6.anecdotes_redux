// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type){
  case 'TOGGLE_VOTE':
    const id = action.data.id
    const anecdoteToChange = state.find(a => a.id === id)
    const changedAnecdote = {
      ...anecdoteToChange, 
      votes: anecdoteToChange.votes+1
    }
    return state.map(a => a.id !== id ? a : changedAnecdote)
  case 'NEW_ANECDOTE':
    return [...state, action.data]
  case 'INIT_ANEC':
    return action.data
  default:
    return state
  }
}

//action creators
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const toggleVoteOf = (anecdote) => {
  return async dispatch => {
    const newVote = await anecdoteService.updateVote(anecdote)
    dispatch({
      type: 'TOGGLE_VOTE',
      data: newVote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer