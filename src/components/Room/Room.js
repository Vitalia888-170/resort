import React from 'react';
import { NavLink } from 'react-router-dom';

export const Room = ({ room }) => {
   const { id, name, price, images, slug } = room;
   return (
      <div className='featured-rooms-item' key={id}>
         <img src={images[0]} alt={id} />
         <p className='name'>{name}</p>
         <p className='price'>{price} $ <span>per night</span></p>
         <NavLink className='featured-item-link' to={`/rooms/${slug}`}>Features</NavLink>
         <div className='featured-rooms-bg'></div>
      </div>
   )
}
