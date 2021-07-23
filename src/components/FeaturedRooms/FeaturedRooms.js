import React, { useContext } from 'react'
import { GlobalContext } from '../../context';
import { Title } from '../Title/Title';
import { Loading } from '../Loading/Loading';
import { Room } from '../Room/Room';

export const FeaturedRooms = () => {
   const data = useContext(GlobalContext);
   const featuredRooms = data.featuredRooms;
   const isLoading = data.loading;
   return (
      <div className='featured-rooms-container'>
         <Title text='Featured Rooms' />
         {isLoading ? <Loading /> : <div className='featured-rooms'>
            {
               featuredRooms.map((room, index) => <Room key={index} room={room} />)
            }
         </div>}
      </div>
   )
}



