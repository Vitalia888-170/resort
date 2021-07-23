import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';
import { links } from './linksData';

function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const headerNavRef = useRef();
   const menuItemsRef = useRef();
   const { orderList, count } = useContext(GlobalContext);
   useEffect(() => {
      const menuItemsHeight = menuItemsRef.current.getBoundingClientRect().height * 4;
      if (isOpen) {
         headerNavRef.current.style.height = `${menuItemsHeight}px`
      } else {
         headerNavRef.current.style.height = `0px`
      }
   }, [isOpen])

   let partLinks = links.slice(0, 2);
   return (
      <div className="header-container">
         <div className='header-content'>
            <div className='header-logo'>
               <NavLink className='logo' to='/'>Beach Resort</NavLink>
            </div>
            <button className={isOpen ? 'menu-btn show-menu' : 'menu-btn'} onClick={() => setIsOpen(!isOpen)}>
               <FaAlignJustify style={{ fontSize: '28px', color: 'white' }} />
            </button>
         </div>
         <nav className={isOpen ? 'link-container menu-opened' : 'link-container'} ref={headerNavRef}>
            {links.map(link => {
               const { id, url, text } = link;
               return <NavLink onClick={() => setIsOpen(!isOpen)} key={id} to={url} ref={menuItemsRef} className='menu-item'>{text}</NavLink>
            })}
         </nav>
         <nav className='header-nav'>
            {partLinks.map(link => {
               const { id, url, text } = link;
               return <NavLink key={id} to={url} className='menu-item'>{text}</NavLink>
            })}
         </nav>
         <NavLink className="basket-nav" to="/basket">
            <FiShoppingCart className="basket-icon" />
            <span>{count}</span>
         </NavLink>
      </div>
   )
}

export default Header;
