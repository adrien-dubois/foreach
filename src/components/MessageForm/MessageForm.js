import React, { useContext, useState } from 'react'
import { Div, MsgOutput } from './MessageForm.elements'
import { FaPaperPlane } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { AppContext } from '../../context/appContext';

function MessageForm() {
  const [message, setMessage] = useState("");
  const user = useSelector((user) => user.state)
  const {} = useContext(AppContext);
  function getFormatedDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = (1+date.getMonth()).toString();

    month = month.length > 1 ? month : '0' + month;
    const day = date.getDate().toString();

    day = day.length > 1 ? day : '0' + day;

    return day + "/" + month + "/" + year
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  const todayDate = getFormatedDate();

  function handleSubmit(e){
    e.preventDefault();
    const today = new Date();
    const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  }
  
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