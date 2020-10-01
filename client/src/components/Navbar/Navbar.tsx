import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface props {

};
const Navbar : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      Navbar
    </Wrapper>
  )
}

export default Navbar;


const Wrapper = styled.div`
  grid-area: navbar;
`;