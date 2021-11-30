import { useSelector } from 'react-redux'
import React from 'react'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 2
  }
  if(notification){
return (
      <div style={style}>
        most recent vote: '{notification}'
      </div> 
)
  } else {
    return null
  }
}

export default Notification