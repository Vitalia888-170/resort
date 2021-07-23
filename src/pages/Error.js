import React from 'react';
import { BgTitle } from '../components/BgTitle/BgTitle';
import { Banner } from '../components/Banner/Banner';
import { NavLink } from 'react-router-dom';

const Error = () => {
   return (
      <BgTitle title='defaultHome' >
         <Banner title='404' subtitle='Not found'>
            <NavLink className='banner-btn' to='/'>Return Home</NavLink>
         </Banner>
      </BgTitle>
   )
}

export default Error;
