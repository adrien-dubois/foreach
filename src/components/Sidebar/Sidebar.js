import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppContext } from '../../context/appContext';
import { Div } from './Sidebar.elements'
import { addNotifications, resetNotifications } from '../../features/userSlice'

function Sidebar() {

  const user = useSelector((state) => state.user);
  const { 
    socket, 
    setMembers, 
    members, 
    setCurrentRoom, 
    setRooms, 
    privateMemberMsg, 
    setPrivateMemberMsg, 
    rooms, 
    currentRoom 
  } = useContext(AppContext)

  function joinRoom(room, isPublic = true){
    if(!user){
      return alert("Veuillez vous identifier");
    }
    socket.emit('join-room', room);
    setCurrentRoom(room);

    if(isPublic){
      setPrivateMemberMsg(null);
    }

    // dispatch for notifications
  }

  function orderIds(id1, id2) {
    if(id1 > id2) {
      return id1 + "-" + id2;
    } else {
      return id2 + "-" + id1;
    }
  }

  function handlePrivateMemberMsg(member){
    setPrivateMemberMsg(member);
    const roomId = orderIds(user._id, member._id);
    joinRoom(roomId, false);
  }

  useEffect(()=>{
    if(user){
      setCurrentRoom('General');
      getRooms();
      socket.emit('join-room', 'general');
      socket.emit('new-user');
    }
  },[])

  socket.off('new-user').on('new-user', (payload) => {
    setMembers(payload);
  })

  function getRooms(){
    fetch("http://localhost:5001/rooms")
    .then((res) => res.json())
    .then((data) => setRooms(data));
  }

  if(!user){
    return <></>;
  }

  return (
    <>
      <Div>
        <h2>Chatrooms disponibles</h2>
        <ul className='chatroom'>
          {rooms.map( (room, idx) => (
            <li 
              key={idx}
              onClick={() => joinRoom(room)}
              className={room == currentRoom ? 'actif' : ''}
            > 
              {room} {currentRoom !== room && <span></span>}
            </li>
          ))}
        </ul>

        <h2 className='chat'>Chaters</h2>
        <ul className='membre'>
          {members.map((member) => (
              <li 
                key={member.id}
                className={`
                  ${privateMemberMsg?._id == member?._id ? 'actif' : ''}
                  ${member._id === user._id ? 'disabling' : ''}
                `}
                onClick={() => handlePrivateMemberMsg(member)}
              >
                {member.name}
              </li>
          ))}
        </ul>
      </Div>
    </>
  )
}

export default Sidebar