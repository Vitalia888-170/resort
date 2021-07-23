import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';
import { Room } from '../Room/Room';

export const RoomList = () => {
   const roomsList = useContext(GlobalContext);
   const rooms = roomsList.sortedRooms;
   if (rooms.length === 0) {
      return (
         <div className='error-room-container'>
            <p className='room-error-message'>No rooms match your searching parametres</p>
         </div>
      )
   }

   return (
      <div className='rooms-list-container'>
         {rooms.map((item, index) => <Room key={index} room={item} />)}

      </div>
   )

}
