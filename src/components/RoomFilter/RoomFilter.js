import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { Title } from '../Title/Title';

export const RoomFilter = () => {
   const rooms = useContext(GlobalContext);
   const roomsTypes = ['all', ...new Set(rooms.rooms.map(item => item.type))];
   const roomsCapacity = [...new Set(rooms.rooms.map(item => item.capacity))];


   const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = rooms;
   return (
      <div>
         <Title text='Search Rooms' />
         <form className='rooms-form'>
            <div className='room-filter-content room-date'>
               <label htmlFor='type'>Check-in date:</label>
               <input type="date" />
            </div>
            <div className='room-filter-content room-date'>
               <label htmlFor='type'>Check-in date:</label>
               <input type="date" />
            </div>
            <div className='room-filter-content'>
               <label htmlFor='type'> Rooms type:</label>
               <select name='type' value={type} id='type' onChange={handleChange}>
                  {
                     roomsTypes.map((type, index) => <option key={index} value={type}>{type}</option>)
                  }
               </select>
            </div>
            <div className='room-filter-content'>
               <label htmlFor='capacity'>Guests:</label>
               <select name='capacity' value={capacity} id='capacity' onChange={handleChange}>
                  {
                     roomsCapacity.map((item, index) => <option key={index} value={item}>{item}</option>)
                  }
               </select>
            </div>
            <div className='room-filter-content'>
               <label htmlFor='price'>Price ${price}:</label>
               <input type='range' name='price' value={price} min={minPrice} max={maxPrice} id='price' onChange={handleChange} />
            </div>
            <div className='room-filter-content'>
               <label htmlFor='size1'>Rooms size:</label>
               <div className='room-size'>
                  <input type='number' name='minSize' value={minSize} id='size1' onChange={handleChange} />
                  <input type='number' name='maxSize' value={maxSize} id='size2' onChange={handleChange} />
               </div>
            </div>
            <div className='room-filter-content add-filter'>
               <div className='other-things'>
                  <input type='checkbox' name='breakfast' checked={breakfast} id='breakfast' onChange={handleChange} />
                  <label htmlFor='breakfast'>Breakfast</label>
               </div>
               <div className='other-things'>
                  <input type='checkbox' name='pets' checked={pets} id='pets' onChange={handleChange} />
                  <label htmlFor='pets'>Pets</label>
               </div>
            </div>
         </form>
      </div>
   )
}
