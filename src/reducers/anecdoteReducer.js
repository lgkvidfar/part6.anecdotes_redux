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