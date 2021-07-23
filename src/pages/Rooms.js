import React from 'react';
import { BgTitle } from '../components/BgTitle/BgTitle';
import { Banner } from '../components/Banner/Banner';
import { RoomList } from '../components/RoomList/RoomList';
import { RoomFilter } from '../components/RoomFilter/RoomFilter';
import { NavLink } from 'react-router-dom';

function Rooms() {
   return (
      <>
         <BgTitle title='defaultRooms'>
            <Banner title='Our rooms' subtitle='We will choose the best one for you'>
               <NavLink className='banner-btn' to='/'>Return Home</NavLink>
            </Banner>
         </BgTitle>
         <div className="wrap">
            <RoomFilter />
            <RoomList />
         </div>
      </>

   )
}

export default Rooms;
