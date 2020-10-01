import React, {useState} from 'react'; 
import styled from 'styled-components'; 

import {useExternalScript, useLocalLogicFunctionScript} from '../../hooks';
import {latlng} from '../../types';

interface props {
  coords:latlng
};
const SDKwidget: React.FC<props> = ({coords}) => { 
  const [lat, setLat] = useState<number>(45.50717558);
  const [lng, setLng] = useState<number>(-73.5780121);
  let widgetTargetId = 'local-content-widget';
  
  useLocalLogicFunctionScript(widgetTargetId, coords.lat, coords.lng);
  
  useExternalScript(`https://cdn.locallogic.co/sdk/?token=${process.env.REACT_APP_LOCALLOGICSDK}&callback=initLocallogic`);
  

  return (
    <StyledDiv data-css='widget wrap'> 
      <LatLngDisplay>
        {`Latitiude ${coords.lat}, Longtitude ${coords.lng}`}
      </LatLngDisplay>
      <div id="local-content-widget"></div>      
    </StyledDiv> 
  ) 
}; 


export default SDKwidget;


const StyledDiv = styled.div`
  grid-area: widget;
  max-width: 90%;
  overflow: hidden;
`;
const LatLngDisplay = styled.p`
  padding: .25rem;
  font-size: .75rem;
`;
