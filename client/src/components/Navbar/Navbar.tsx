import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


import {GoQuestion} from 'react-icons/go';

interface props {

};
const Navbar : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='nav'>
      <Title>
        Locally Yours
      </Title>
      <About
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GoQuestion/>
      </About>
    </Wrapper>
  )
}

export default Navbar;


const Wrapper = styled.div`
  grid-area: navbar;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: gray;
  overflow: hidden;
`;
const Title = styled.h1`
  font-family: 'Limelight', cursive;
  /* font-weight: bold; */
  font-size: 1.5rem;
  padding: 0 .5rem;
`;
const About = styled(motion.div)`
  padding: 0 1.5rem;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;