import React, { createContext, Component, useReducer, useEffect, useState } from 'react';
import data from './data';
import uuid from 'react-uuid'
import { AppReducer } from './AppReducer';

export const initialState = {
   rooms: [],
   featuredRooms: [],
   sortedRooms: [],
   loading: true,
   type: 'all',
   capacity: 1,
   price: 0,
   minPrice: 0,
   maxPrice: 0,
   minSize: 0,
   maxSize: 0,
   breakfast: false,
   pets: false,
   orderList: [],
   total: 0,
   count: 0
};

export const GlobalContext = createContext();

export const RoomProvider = (props) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   const [isModalOpen, setIsModalOpen] = useState(false);

   const setModalOpen = () => {
      setIsModalOpen(true);
   }
   const setModalClose = () => {
      setIsModalOpen(false);
   }

   const formatDataRooms = (data) => {
      let dataList = data.map(item => {
         let id = item.sys.id;
         let images = item.fields.images.map(img => img.fields.file.url);
         let room = { ...item.fields, images, id };
         return room;
      })
      return dataList;
   }
   useEffect(() => {
      let rooms = formatDataRooms(data);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      dispatch({
         type: "SET_ROOMS_DATA",
         payload: {
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
         }
      })
   }, []);

   useEffect(() => {
      let { rooms, price, type, capacity, minSize, maxSize, breakfast, pets } = state;
      capacity = parseInt(capacity);
      price = parseInt(price);
      maxSize = parseInt(maxSize);
      let filteredTypeRooms = [...rooms];
      if (type !== 'all') {
         filteredTypeRooms = filteredTypeRooms.filter(item => item.type === type);
      }
      if (capacity !== 1) {
         filteredTypeRooms = filteredTypeRooms.filter(item => item.capacity >= capacity);
      }
      filteredTypeRooms = filteredTypeRooms.filter(item => item.price <= price);

      filteredTypeRooms = filteredTypeRooms.filter(item => item.size >= minSize && item.size <= maxSize);
      if (breakfast === true) {
         filteredTypeRooms = filteredTypeRooms.filter(item => item.breakfast === true);
      }
      if (pets === true) {
         filteredTypeRooms = filteredTypeRooms.filter(item => item.pets === true);
      }
      dispatch({ type: "FILTER", filter: filteredTypeRooms });
   }, [state.rooms, state.price, state.type, state.capacity, state.minSize, state.maxSize, state.breakfast, state.pets]);
   const handleChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      const filterObj = {
         [name]: value
      }
      dispatch({ type: "FILTER_ROOMS", filterData: filterObj });
   }



   const getRoom = slug => {
      let currentRoomsList = [...state.rooms];
      const room = currentRoomsList.find(item => item.slug === slug);
      return room;
   };

   const setReservationItem = (room, img) => {
      const bookingItem = {
         id: uuid(),
         name: room.name,
         breakfast: room.breakfast,
         pets: room.pets,
         roomImage: img,
         amount: 1,
         capacity: room.capacity,
         currentPrice: room.price
      }
      dispatch({ type: "SET_ORDER", payload: bookingItem });
   };
   useEffect(() => {
      let { count, total } = state.orderList.reduce((cartTotal, cartItem) => {
         const { amount, currentPrice } = cartItem;
         cartTotal.count += amount;
         let itemTotal = amount * currentPrice;
         cartTotal.total += itemTotal;
         return cartTotal;
      }, {
         count: 0,
         total: 0
      });
      dispatch({ type: "SET_ORDER_CALC", calc: { count, total } });
   }, [state.orderList]);
   const toogleManipulation = (id, type) => {
      let currentOrder = state.orderList.map(order => {
         if (order.id === id) {
            if (type === 'inc') {
               return { ...order, amount: order.amount + 1 }
            } else if (type === 'dec') {
               return { ...order, amount: order.amount - 1 }
            }
         }
         return order;
      }).filter(currentItem => currentItem.amount !== 0);
      dispatch({ type: "TOGGLE_MANIPULATION", order: currentOrder });
   }

   return <GlobalContext.Provider value={{
      ...state,
      getRoom,
      handleChange,
      setReservationItem,
      toogleManipulation,
      setModalOpen,
      setModalClose,
      isModalOpen
   }}>
      {props.children}
   </GlobalContext.Provider>
}

