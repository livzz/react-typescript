import React from 'react'

interface UserMessage {
  name: String,
  message: String
}

const Message = (props: UserMessage): any => {
  return (
    <p>{props.message} for {props.name}</p>
  )
}

export default Message;