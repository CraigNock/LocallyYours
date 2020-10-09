import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {MEDIA_GATE} from '../../constants';


interface props {

};
const About : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      <Title>
        About
      </Title> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lorem turpis. Proin id urna orci. Cras posuere nibh est. Maecenas fermentum, nibh eget rutrum tincidunt, ipsum magna dapibus orci, id feugiat elit dui nec augue. Suspendisse malesuada posuere ultrices. Maecenas consequat, odio auctor vehicula feugiat, magna ligula rhoncus libero, in rutrum purus quam eget libero. Praesent lobortis leo a arcu ullamcorper tristique. Integer efficitur massa odio, non hendrerit metus tempus ac. Suspendisse neque lectus, molestie quis lectus eu, vulputate blandit magna. Sed sagittis elit lorem, vitae iaculis tellus luctus a. Donec volutpat velit id elementum egestas.
      </p>
    </Wrapper>
  )
}

export default About;

const Wrapper = styled.div`
  
`;
const Title = styled.div`
  
`;