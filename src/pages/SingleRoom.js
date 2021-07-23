import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context';
import StyledBgTitle from '../components/ChosenBgTitle/ChosenBgTitle';
import { Banner } from '../components/Banner/Banner';
import { NavLink } from 'react-router-dom';
import { Modal } from '../components/Modal/Modal';

const SingleRoom = (props) => {
   const [slug, setSlug] = useState(null);
   const [currentImg, setCurrentImg] = useState(null);

   useEffect(() => {
      setSlug(props.match.params.type);
   }, []);

   const { getRoom, setReservationItem, orderList, setModalOpen } = useContext(GlobalContext);
   const room = getRoom(slug);
   if (!room) {
      return (
         <div className='single-room-container'>
            <p className='room-error-message'>No such room could be found</p>
            <NavLink className='single-room-link' to='/rooms/'>Return to Rooms</NavLink>
         </div>
      )
   }
   const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
   const [firstImage, ...restImages] = images;

   let isBookingRoom = orderList.some(room => room.name === name);

   const orderedRoomItem = () => {
      if (isBookingRoom === false) {
         setReservationItem(room, firstImage);
      }
   }
   const setModalImg = (img) => {
      setModalOpen();
      setCurrentImg(img);
   }

   return (
      <div>
         <StyledBgTitle image={images[0]}>
            <Banner title={`${name} room`}>
               <NavLink className='banner-btn' to='/rooms/'>Return Rooms</NavLink>
            </Banner>
         </StyledBgTitle>
         <Modal image={currentImg} />
         <section className='room-image-list'>
            {
               restImages.map((img, index) => {
                  return (
                     <div key={index}>
                        <img src={img} alt={index} onClick={() => setModalImg(img)} />
                     </div>
                  )
               })
            }
         </section>
         <section className='content'>
            <div className='details'>
               <h5>Details</h5>
               <p>{description}</p>
            </div>
            <div className='info'>
               <h5>Info</h5>
               <p>Price: ${price}</p>
               <p>Size: {size} SQFT</p>
               <p>Max capacity:{capacity === 1 ? `${capacity} person` : `${capacity} people`}</p>
               {breakfast && <p>Free breakfast included</p>}
               <p>{pets ? 'Pets allowed' : 'No pets allowed'}</p>
            </div>
            <div className='extra'>
               <h5>Extra</h5>
               <ul>
                  {extras.map((item, index) => <li key={index}> - {item}</li>)}
                  <button className="banner-btn extra-btn" onClick={orderedRoomItem}>
                     {isBookingRoom ? "Ordered" : "Order this room"}
                  </button>
               </ul>
            </div>
         </section>
      </div>
   )
}
export default SingleRoom;