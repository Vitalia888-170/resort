import React from 'react';
import loadingGif from '../../images/gif/loading-arrow.gif';

export const Loading = () => {
   return (
      <div className='loading'>
         Rooms data loading...
         <img src={loadingGif} alt='' />
      </div>
   )
}
