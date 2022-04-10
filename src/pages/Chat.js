import React from 'react'
import MessageForm from '../components/MessageForm/MessageForm'
import Navigation from '../components/Navigation/Navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import { Div } from '../styles/Chat.elements'

function Chat() {
  return (
    <Div>
      <Navigation/>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar/>
          </div>
          <div className="col-8">
            <MessageForm/>
          </div>
        </div>
      </div>
    </Div>
  )
}

export default Chat