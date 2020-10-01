import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {MEDIA_GATE} from '../../constants';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import SDKwidget from '../SDKwidget';



const Main = () => {


  return (
    <StyledDiv>
      <Navbar />
      <SearchBar/>
      <SDKwidget/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto ;
  grid-template-areas: 
    'navbar'
    'search'
    'widget';

  padding: 2rem;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    
  };
  @media (min-width: ${MEDIA_GATE.widescreen}px){
      
  };
`;





export default Main;
