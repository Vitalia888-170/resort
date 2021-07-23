import React, { useState, useEffect } from 'react';
import { Title } from '../Title/Title';
import { fun } from './funData';


export const Fun = () => {
   const [entertainment, setEntertainment] = useState(fun);
   const [index, setIndex] = useState(0);
   useEffect(() => {
      if (index < 0) {
         setIndex(entertainment.length - 1);
      }
      if (index > entertainment.length - 1) {
         setIndex(0)
      }
   }, [index, entertainment]);

   useEffect(() => {
      let interval = setInterval(() => {
         setIndex(index + 1);
      }, 8000);
      return () => clearInterval(interval);
   });
   return (
      <div className='fun-container'>
         <Title text="Entertainment" />
         <div className='fun-list'>
            {
               entertainment.map((item, itemIndex) => {
                  const { id, text, image } = item;
                  let position = 'nextSlide';
                  if (itemIndex === index) {
                     position = 'activeSlide';
                  }
                  if (itemIndex === index - 1 || (index === 0 && itemIndex === entertainment.length - 1)) {
                     position = 'lastSlide';
                  }
                  return (
                     <article className={position} key={id}>
                        <img className='fun-image' src={image} alt={id} />
                        <p>{text}</p>
                     </article>
                  )
               })
            }
         </div>
      </div>
   )
}

