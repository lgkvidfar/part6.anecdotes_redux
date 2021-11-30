const notificationReducer = (state = null, action) => {
    console.log('filterReducer ACTION:', action)
    switch(action.type){
    case 'MESSAGE':
      return action.data.message.content
    case 'NULL':
        return null
    default:
      return state
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