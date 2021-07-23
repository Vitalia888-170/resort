import React from 'react'

export const Banner = ({ children, title, subtitle }) => {
   return (
      <div className='banner-container'>
         <h2>{title}</h2>
         <p>{subtitle}</p>
         {children}
      </div>
   )
}

