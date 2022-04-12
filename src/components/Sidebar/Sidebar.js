import React from 'react'
import { useSelector } from 'react-redux'
import { Div } from './Sidebar.elements'

function Sidebar() {

  const rooms = [
    'first room',
    'second room',
    'third room'
  ]

  const user = useSelector((state) => state.user);

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

      </Div>
    </>
  )
}

export default Sidebar