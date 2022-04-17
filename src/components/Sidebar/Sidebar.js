import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppContext } from '../../context/appContext';
import { Div } from './Sidebar.elements'
import { addNotifications, resetNotifications } from '../../features/userSlice'
import { FaCircle } from 'react-icons/fa'

function Sidebar() {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { 
    socket, 
    setMembers, 
    members, 
    setCurrentRoom, 
    setRooms, 
    privateMemberMsg, 
    rooms, 
    setPrivateMemberMsg, 
    currentRoom,
  } = useContext(AppContext)

  function joinRoom(room, isPublic = true){

    if(!user){
      return alert("Veuillez vous identifier");
    }

    socket.emit("join-room", room, currentRoom);
    setCurrentRoom(room);

    if (isPublic){
      setPrivateMemberMsg(null);
    }

    // dispatch for notifications
    dispatch(resetNotifications(room));

  }

  socket.off("notifications").on("notifications", (room) => {
    if(currentRoom != room) dispatch(addNotifications(room));
    
  }); 


useEffect(()=>{
    if(user){
      setCurrentRoom('General');
      getRooms();
      socket.emit('join-room', 'General');
      socket.emit('new-user');
    }
  },[])


 function getRooms(){
    fetch("http://localhost:5001/rooms")
    .then((res) => res.json())
    .then((data) => setRooms(data));
  }

  

  socket.off('new-user').on('new-user', (payload) => {
    setMembers(payload);
  })

 

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
  
  if(!user){
    return <></>;
  }

  return (
    <>
    {/* CHATROOMS PART */}
      <Div>
        <h2>Chatrooms disponibles</h2>
        <ul className='chatroom'>
          {
          rooms.map((room, idx) => (
            <li 
              key={idx}
              onClick={() => joinRoom(room)}
              className={room === currentRoom ? 'actif' : ''}
            > 
              {room} 
              {currentRoom !== room && 
              user.newMessages[room] ? (
              
                <span className='notifs'>
                  {user.newMessages[room]}
                </span>
              ) : ''
              } 
            </li>
          ))}
        </ul>

        {/* MEMBERS PART */}
        <h2 className='chat'>Chaters</h2>
        <ul className='membre'>
          {members.map((member) => (
              <li 
                key={member.id}
                className={`
                  ${privateMemberMsg?._id === member?._id ? 'actif' : ''}
                  ${member._id === user._id ? 'disabling' : ''}
                `}
                onClick={() => handlePrivateMemberMsg(member)}
              >
                <div className="row">
                  <div className="col-2">
                    <img src={member.picture} className='member-pic' alt='Member'/>
                    {member.status == "En ligne" ? <FaCircle className='online'/> : <FaCircle className='offline'/>}
                  </div>
                  <div className="col-9">
                    {member.name}
                    {member._id == user?._id && " (Vous)"}
                    {member.status == "Hors Ligne" && <span className="offtxt">(Offline)</span> }
                  </div>
                  <div className="col-1">
                    { user.newMessages[orderIds(member._id, user._id)] ? (
                    <span className="notifs">
                      {user.newMessages[orderIds(member._id, user._id)]}
                    </span> ) : ''
                    }
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </Div>
    </>
  )
}

export default Sidebar