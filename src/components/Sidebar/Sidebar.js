import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppContext } from '../../context/appContext';
import { Div } from './Sidebar.elements'

function Sidebar() {

  const user = useSelector((state) => state.user);
  const { 
    socket, 
    setMembers, 
    members, 
    setCurrentRoom, 
    setRooms, 
    privateMemberMsg, 
    setPrivateMember, 
    rooms, 
    currentRoom 
  } = useContext(AppContext)


  useEffect(()=>{
    if(user){
      setCurrentRoom('general');
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
    .then(data => setRooms(data));
  }

  if(!user){
    return <></>;
  }

  return (
    <>
      <Div>
        <h2>Chatrooms disponibles</h2>
        <ul>
          {rooms.map( (room, idx) => (
            <li key={idx}> {room} </li>
          ))}
        </ul>

        <h2 className='chat'>Chaters</h2>
        <ul className='membre'>
          {members.map((member) => (
              <li key={member.id}>
                {member.name}
              </li>
          ))}
        </ul>
      </Div>
    </>
  )
}

export default Sidebar