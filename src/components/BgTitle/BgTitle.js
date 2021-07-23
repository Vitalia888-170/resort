import React from 'react'

export const BgTitle = ({ children, title }) => {
   return (
      <div className={title}>
         {children}
      </div>
   )
}
