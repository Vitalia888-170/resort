import React, { useContext } from 'react';
import { GrFormClose } from "react-icons/gr";
import styled from 'styled-components';
import { GlobalContext } from '../../context';

const ModalImg = styled.div`
width:100%;
height:100%;
background: url(${props => props.image});
background-size:cover;
background-repeat:no-repeat;
background-position:center;
@media(max-width:1200px){
   background-size:contain;
}
`;
export const Modal = (props) => {
   const { isModalOpen, setModalClose } = useContext(GlobalContext);
   return (
      <div>
         <div className={isModalOpen ? "modal-overlay modal-open" : "modal-overlay"}>
            <div className="modal-container">
               <GrFormClose className="modal-close" onClick={setModalClose} />
               <ModalImg image={props.image} />
            </div>
         </div>
      </div>
   )
}

