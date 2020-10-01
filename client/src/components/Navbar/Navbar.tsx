import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface props {

};
const Navbar : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='nav'>
      Navbar
    </Wrapper>
  )
}

export default Navbar;


const Wrapper = styled.div`
  grid-area: navbar;
  height: 4rem;
  width: 100%;
  background: gray;
`;