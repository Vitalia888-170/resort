import React, { useContext } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { MdPets, MdFreeBreakfast } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { GlobalContext } from '../../context';


export const BasketItem = ({ order }) => {
   const { toogleManipulation } = useContext(GlobalContext);
   return (
      <div className="order-container">
         <img src={order.roomImage} alt="room" />
         <p className="order-name">{order.name}</p>
         <div className="order-amount-person">
            <BsFillPersonFill />
            <span>{order.capacity}</span>
         </div>
         <div>
            {
               order.pets ? <MdPets className="pets-icon" /> : ""
            }
            {
               order.breakfast ? <MdFreeBreakfast /> : ""
            }
         </div>
         <div className="counter">
            <p>{order.amount}</p>
            <span onClick={() => toogleManipulation(order.id, 'inc')}><BsPlus className="increase" /></span>
            <span onClick={() => toogleManipulation(order.id, 'dec')}><BiMinus className="decrease" /></span>
         </div>
         <p>{order.currentPrice} $</p>
      </div>
   )
}

