import React from 'react'

export const Title = ({ text }) => {
   return (
      <div className='main-title'>
         <h1>{text}</h1>
         <div className='underline'></div>
      </div>
   )
}

