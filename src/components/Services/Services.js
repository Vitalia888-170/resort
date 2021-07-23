import React from 'react';
import { Title } from '../Title/Title';
import { services } from './servicesData';

export const Services = () => {
   return (
      <div className='services-container'>
         <Title text='Services' />
         <div className='services'>
            {
               services.map((service, index) => {
                  const { icon, title, info } = service;
                  return <div key={index}>
                     <span style={{ fontSize: '28px', color: 'rgba(112, 47, 10, 0.733)' }}>{icon}</span>
                     <h4>{title}</h4>
                     <p>{info}</p>
                  </div>
               })
            }
         </div>


      </div>
   )
}

