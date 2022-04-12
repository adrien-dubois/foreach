import React from 'react'
import { Div, MsgOutput } from './MessageForm.elements'
import { FaPaperPlane } from 'react-icons/fa'
import { useSelector } from 'react-redux';

function MessageForm() {

  function handleSubmit(e){
    e.preventDefault();
  }

  const user = useSelector((state) => state.user);
  
  return (
    <Div>
      <MsgOutput>
        {!user && <div className="alert">Veuillez vous connecter</div>}
      </MsgOutput>
        <form action="" onSubmit={handleSubmit}>
          <div className="msg-container">
            <input 
              type="text" 
              className='form-control'
              placeholder='Message...'
              disabled={!user}
            />
            <button 
              type="submit" 
              className='send-btn'
              disabled={!user}
            >
              <FaPaperPlane/>
            </button>

          </div>
        </form>
    </Div>
  )
}

export default MessageForm