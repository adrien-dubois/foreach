import React from 'react'
import { Div, MsgOutput } from './MessageForm.elements'
import { FaPaperPlane } from 'react-icons/fa'

function MessageForm() {

  function handleSubmit(e){
    e.preventDefault();
  }
  
  return (
    <Div>
      <MsgOutput/>
        <form action="" onSubmit={handleSubmit}>
          <div className="msg-container">
            <input 
              type="text" 
              className='form-control'
              placeholder='Message...'
            />
            <button type="submit" className='send-btn' >
              <FaPaperPlane/>
            </button>

          </div>
        </form>
    </Div>
  )
}

export default MessageForm