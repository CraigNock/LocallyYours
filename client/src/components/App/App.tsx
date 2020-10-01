import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../../Globalstyles';
import Main from '../Main';
import {MEDIA_GATE} from '../../constants';



const App = () => {

  return (
    <Wrapper data-css='app-div'>
      <GlobalStyles/>
      <Main/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: slategray;
  margin: 0;
  padding: 0;
  /* width: 100%; */
  @media (min-width: ${MEDIA_GATE.tablet}px){
    
  };
  @media (min-width: ${MEDIA_GATE.desktop}px){
    
  };
`;

export default App;
