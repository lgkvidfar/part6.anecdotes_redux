const notificationReducer = (state = null, action) => {
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

//action creators
export const timedMessage = (message, timer) => {
  return async dispatch => {
     dispatch(setNotification(message))
     setTimeout(async () => 
     dispatch(stopNotification()), timer*1000)
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