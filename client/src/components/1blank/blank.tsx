import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {MEDIA_GATE} from '../../constants';


interface props {

};
const blank : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      blank
    </Wrapper>
  )
}

export default blank;

const Wrapper = styled.div`

`;