import React from 'react';
import { BgTitle } from '../components/BgTitle/BgTitle';
import { Banner } from '../components/Banner/Banner';
import { Services } from '../components/Services/Services';
import { Fun } from '../components/Entertainment/Fun';
import { FeaturedRooms } from '../components/FeaturedRooms/FeaturedRooms';
import { NavLink } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <BgTitle title='defaultHome' >
            <Banner title='Welcome to Beach Resort' subtitle='Deluxe Rooms started at 560$'>
               <NavLink className='banner-btn' to='/rooms/'>Our Rooms</NavLink>
            </Banner>
         </BgTitle>
         <div className="wrap">
            <Services />
            <Fun />
            <FeaturedRooms />
         </div>
      </>

   )
}

export default Home;
