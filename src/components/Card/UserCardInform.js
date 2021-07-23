import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import useCardForm from '../CreditCard/cardForm';

export const UserCardInform = () => {
   const { handleChange, handleFocus, handleSubmit, values, error } = useCardForm();
   return (
      <section className="card">
         <div className="credit-card">
            <h5>Credit card</h5>
            <div className="card-visual">
               <Cards
                  cvc={values.cvc}
                  expiry={values.expiry}
                  focused={values.focus}
                  name={values.name}
                  number={values.number}
               />
            </div>
         </div>
         <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-block">
               <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  onFocus={(e) => handleFocus(e)}
                  value={values.name}
               />
               <label htmlFor="name" className="input-title">
                  <span className="content-name">Order`s fullName</span>
               </label>
            </div>
            <div className="input-block">
               <input
                  id="number"
                  type="number"
                  name="number"
                  onChange={(e) => handleChange(e)}
                  onFocus={(e) => handleFocus(e)}
                  value={values.number}
               />
               <label htmlFor="number" className="input-title">
                  <span className="content-name">Card Number</span>
               </label>
            </div>
            <div className="card-security">
               <div className="input-block">
                  <input
                     id="expiry"
                     type="text"
                     name="expiry"
                     onChange={(e) => handleChange(e)}
                     onFocus={(e) => handleFocus(e)}
                     value={values.expiry}
                  />
                  <label htmlFor="expiry" className="input-title">
                     <span className="content-name">Expiry date</span>
                  </label>
               </div>
               <div className="input-block">
                  <input
                     id="cvc"
                     type="number"
                     name="cvc"
                     onChange={(e) => handleChange(e)}
                     onFocus={(e) => handleFocus(e)}
                     value={values.cvc}
                  />
                  <label htmlFor="cvc" className="input-title">
                     <span className="content-name">CVC</span>
                  </label>
               </div>
            </div>
            <button className="banner-btn form" type="submit">Pay</button>
         </form>
         <div className={error ? "errors-block" : ""}>
            {error ? error.message : ""}
         </div>
      </section>
   )
}

