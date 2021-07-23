import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketInform } from '../components/BasketDetails/BasketInform'
import { UserCardInform } from '../components/Card/UserCardInform'
import { Title } from '../components/Title/Title'
import { GlobalContext } from '../context'

const Basket = () => {
   const { orderList } = useContext(GlobalContext);
   if (orderList.length === 0) {
      return (
         <div className='single-room-container'>
            <p className='room-error-message'>Your basket is empty </p>
            <NavLink className='single-room-link' to='/rooms/'>Return to Rooms</NavLink>
         </div>
      )
   }
   return (
      <div className="basket-container">
         <div className="wrap">
            <Title text="Your Shopping Cart" />
            <div className="basket-content">
               <BasketInform />
               <UserCardInform />
            </div>
         </div>
      </div>
   )
}
export default Basket;
