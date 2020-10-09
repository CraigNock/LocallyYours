import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {MEDIA_GATE} from '../../constants';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import SDKwidget from '../SDKwidget';
import {latlng} from '../../types';



const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [coords, setCoords] = useState<latlng>({
    lat: 45.50717558, 
    lng: -73.5780121,
  });

  return (
    <StyledDiv data-css='main'>
      <Navbar />
      <SearchBar setCoords={setCoords}/>
      <SDKwidget coords={coords}/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto ;
  grid-template-areas: 
    'navbar'
    'search'
    'widget'; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* padding: 2rem; */
  @media (min-width: ${MEDIA_GATE.tablet}px){
    
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    
  };
  @media (min-width: ${MEDIA_GATE.widescreen}px){
      
  };
`;





export default Main;
