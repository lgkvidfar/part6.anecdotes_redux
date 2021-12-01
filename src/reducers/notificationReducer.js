const notificationReducer = (state = null, action) => {
    console.log('filterReducer ACTION:', action)
    switch(action.type){
    case 'MESSAGE':
      const message = action.data.message
      return `${message}`
    case 'NULL':
        return null
    default:
      return state
    }
}

export const timedMessage = (message, timer) => {
  return async dispatch => {
    await dispatch(setNotification(message))
    setTimeout(async () => 
    await dispatch(stopNotification()), timer*1000)
  }
}

export const setNotification = message =>{
    return {
      type: 'MESSAGE',
      data: { message }
    }
}

export const stopNotification = () => ({
    type: 'NULL'
})

export default notificationReducer