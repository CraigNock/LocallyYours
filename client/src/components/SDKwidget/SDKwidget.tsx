import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import {useExternalScript, useLocalLogicFunctionScript} from '../../hooks';
import {latlng} from '../../types';
import { MEDIA_GATE } from '../../constants';
import Loader from '../Loader';

interface props {
  coords:latlng
};
const SDKwidget: React.FC<props> = ({coords}) => { 
  
  let widgetTargetId = 'local-content-widget';
  
  useLocalLogicFunctionScript(widgetTargetId, coords.lat, coords.lng);
  
  useExternalScript(`https://cdn.locallogic.co/sdk/?token=${process.env.REACT_APP_LOCALLOGICSDK}&callback=initLocallogic`, coords.lat, coords.lng);
  

  return (
    <StyledDiv data-css='widget wrap'> 
      <LatLngDisplay>
        {`Latitiude ${coords.lat}, Longtitude ${coords.lng}`}
      </LatLngDisplay>
      <WidgetDiv>
        <div id="local-content-widget" ></div> 
      <Loader />    
      </WidgetDiv>

    </StyledDiv> 
  ) 
}; 


export default SDKwidget;


const StyledDiv = styled.div`
  /* position: relative; */
  grid-area: widget;
  width: 90vw;
  max-width: 90%;
  min-height: 500px;
  overflow: hidden;
  background: whitesmoke;
  /* opacity: .3; */
  border-radius: 5px;
  @media (min-width: ${MEDIA_GATE.tablet}px){
    min-height: 600px;
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    min-height: 600px;
  };
  @media (min-width: ${MEDIA_GATE.widescreen}px){
      
  };
`;
const LatLngDisplay = styled.p`
  padding: .25rem;
  font-size: .75rem;
  color: black;
`;
const WidgetDiv = styled.div`
  position: relative;
  min-height: 400px;
  z-index: 2;
`;