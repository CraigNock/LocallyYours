import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import compass from '../../assets/compass.png';

interface props {
};
const Loader : React.FC<props> = () => {

  return (
    <AnimatePresence >
      <Wrapper>
        <Spinner 
          src={compass} 
          alt='Spinning compass'
          animate={{ rotate: [360, 0] }}
          transition={{
          duration: 2.5,
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
  width: 100%;
  margin: 4rem auto;
  text-align: center;
`;
const Spinner = styled(motion.img)`
  width: 4rem;
  height: 4rem;
  margin: 0 ;
  padding: 0 ;
  filter: grayscale(50%);
`;
