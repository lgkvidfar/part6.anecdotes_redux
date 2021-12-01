import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  console.log(response);
  return response.data
}

const updateVote = async (anecdote) => {
  const updatedAnecdote = {...anecdote, votes:anecdote.votes+1}
  const response = await axios.put(`${baseUrl}/${anecdote.id}`,updatedAnecdote)
  return response.data
}

const deleteAnecdote = async (anecdote) => {
  const response = axios.delete((`${baseUrl}/${anecdote.id}`))
  return response.data
}

const exports =  { getAll, createNew, updateVote,deleteAnecdote }
export default exports