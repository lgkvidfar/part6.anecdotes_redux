import { connect } from 'react-redux'
import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 2
  }
  if(props.notification) {
    return (
      <div style={style}>
        {props.notification}
      </div> 
    )
  } else {
    return (
    <div>
      {null}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  const start = state.notification
    return {
      notification: start
    } 
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification