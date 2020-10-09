import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import compass from '../../assets/compassdark.png';

interface props {
};
const Loader : React.FC<props> = () => {

  return (
    <AnimatePresence >
      <Wrapper>
        <Spinner 
          src={compass} 
          alt='Spinning compass'
          animate={{ rotate: [0, 360] }}
          transition={{
          duration: 3,
          repeat: Infinity,
          // repeatType: 'reverse',
          ease: 'linear',
          }}
        />
      </Wrapper>
    </AnimatePresence>
    
  )
}

export default Loader;

const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  margin: 4rem auto;
  text-align: center;
  top: 30%;
  z-index: -1;
`;
const Spinner = styled(motion.img)`
  width: 6rem;
  height: 6rem;
  margin: 0 ;
  padding: 0 ;
  filter: grayscale(50%);
`;
