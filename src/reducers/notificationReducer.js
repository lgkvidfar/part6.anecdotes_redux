const notificationReducer = (state = null, action) => {
    console.log('filterReducer ACTION:', action)
    switch(action.type){
    case 'VOTE_MESSAGE':
      const voteMessage = action.data.message.content
      return `latest vote: ${voteMessage}`
    case 'NEW_MESSAGE':
      const newMessage = action.data.message
      console.log(action.data.message)
      return `'${newMessage}'' added to list of blogs`
    case 'NULL':
        return null
    default:
      return state
    }
}

export const setVoteNotification = message =>{
    return {
      type: 'VOTE_MESSAGE',
      data: { message }
    }
}

export const setNewNotification = message => {
  return {
    type: 'NEW_MESSAGE',
    data: { message }
  }
}

export const stopNotification = () => ({
    type: 'NULL'
})

export default notificationReducer