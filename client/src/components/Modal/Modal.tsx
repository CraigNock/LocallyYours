import React, {useState, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {MEDIA_GATE} from '../../constants';
import {IoMdCloseCircleOutline} from 'react-icons/io';

interface props {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
};
const Modal : React.FC<PropsWithChildren<props>> = ({showModal, setShowModal, children}) => {


  return (
    <Wrapper style={{display: showModal? 'block': 'none'}}>
      <Back
        onClick={()=>setShowModal(false)}
      >
        <Front>
          <CloseButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoMdCloseCircleOutline/>
          </CloseButton>
          {children}
        </Front>
      </Back>
    </Wrapper>
  )
}

export default Modal;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10000;
`;
const Back = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .5);
  &:hover {
    cursor: pointer;
  }
`;
const Front = styled(motion.div)`
  position: relative;
  height: 80%;
  width: 80%;
  padding: 1rem;
  background: whitesmoke;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 3px 15px rgba(0,0,0,.5);
  -moz-box-shadow: 0px 3px 15px rgba(0,0,0,.5);
  box-shadow: 0px 3px 15px rgba(0,0,0,.5);
  @media (min-width: ${MEDIA_GATE.tablet}px){
    height: 70%;
    width: 80%;
    margin-top: -5rem;
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    height: 60%;
    width: 70%;
    margin-top: -10rem;
  };
  @media (min-width: ${MEDIA_GATE.widescreen}px){
    
  };
`;
const CloseButton = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  color: maroon;
  font-size: 1.5rem;
`;