import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { BasketItem } from '../BasketItem/BasketItem'

export const BasketInform = () => {
   const { orderList, total } = useContext(GlobalContext);
   return (
      <div>
         <div className="total">
            <span>Total price :</span>
            <span> {total} $</span>
         </div>
         {
            orderList.map((order) => <BasketItem key={order.id} order={order} />)
         }
      </div>
   )
}
