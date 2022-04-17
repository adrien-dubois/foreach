import React, { useContext, useState } from 'react'
import { Div, MsgOutput } from './MessageForm.elements'
import { FaPaperPlane } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { AppContext } from '../../context/appContext';

function MessageForm() {
  const { 
    socket, 
    currentRoom, 
    setMessages, 
    messages, 
    privateMemberMsg 
  } = useContext(AppContext);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);
  

  function getFormattedDate(){
    const date = new Date();
    const year = date.getFullYear();
    let month = (1+date.getMonth()).toString();

    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();

    day = day.length > 1 ? day : '0' + day;

    return day + "/" + month + "/" + year;
  }

  function handleSubmit(e){

    e.preventDefault();
  }

  const todayDate = getFormattedDate();

  socket.off('room-messages').on('room-messages', (roomMessages) => {
    // console.log("room messages", roomMessages);
    setMessages(roomMessages);
  })

  function handleSubmit(e){

    e.preventDefault();
    if(!message) return;

    const today = new Date();
    const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const time = today.getHours + ":" + minutes;
    const roomId = currentRoom;

    socket.emit('message-room', roomId, message, user, time, todayDate);
    setMessage("");
  }
  
  return (
    <Div>
      <MsgOutput>
        {!user && <div className="alert">Veuillez vous connecter</div>}

          {user &&
             messages.map(({ _id: date, messagesByDate }, idx) => (

              <div className='msg-wrapper' key={idx}>
                <p className="msg-wrapper__date">{date}</p>

                {messagesByDate?.map(({ content, time, from: sender }, msgIdx) => (
                  <div className="msg-wrapper__msg" key={msgIdx} >
                    <p>{content}</p>
                  </div>
                ))}

                
              </div>
          ))}
      </MsgOutput>
        <form action="" onSubmit={handleSubmit}>
          <div className="msg-container">
            <input 
              type="text" 
              className='form-control'
              placeholder='Message...'
              disabled={!user}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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