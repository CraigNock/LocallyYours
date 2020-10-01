import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import {useExternalScript, useLocalLogicFunctionScript} from '../../hooks';

const SDKwidget = () => { 
  const [lat, setLat] = useState<number>(45.50717558);
  const [lng, setLng] = useState<number>(-73.5780121);
  let widgetTargetId = 'local-content-widget';
  
  useLocalLogicFunctionScript(widgetTargetId, lat, lng);
  
  useExternalScript(`https://cdn.locallogic.co/sdk/?token=${process.env.REACT_APP_LOCALLOGICSDK}&callback=initLocallogic`);
  

  return (
    <StyledDiv> 
      <div id="local-content-widget"></div>      
    </StyledDiv> 
  ) 
}; 


export default SDKwidget;


const StyledDiv = styled.div`
  grid-area: widget;
  max-width: 90vw;
`;