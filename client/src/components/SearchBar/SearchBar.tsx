import React, {useState, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {MEDIA_GATE} from '../../constants';
import {fetchCoords} from '../../apiCalls';
import {latlng, resObject} from '../../types';

interface props {

};
const SearchBar : React.FC<PropsWithChildren<props>> = () => {
  const [inputValue, setInputValue] = useState<string>('');
//disables submit button while searching
  const [disable, setDisable] = useState<boolean>(false);
//used to display errors returned from fetch
  const [error, setError] = useState<string>('');

  const [coords, setCoords] = useState<latlng>({
    lat: 45.50717558, 
    lng: -73.5780121,
  });
  const [fullAddress, setFullAddress] = useState<string>('');

  const submitHandle = async (search:string) : Promise<any> => {
    if(!search || search.length < 2) return;
//disables search button until results fetched
    setDisable(true);
    // setLoading(true);
    console.log('search', search);
    // run fetch function, handle error
    const result: resObject = await fetchCoords(search);
    console.log('result', result);
    if(typeof result.coords === 'object'){
      setError('');
      setCoords(result.coords);
      setFullAddress(result.fullAddress);
    } else {
      setError(result.coords);
    };

    setDisable(false);
    // setLoading(false);
  };

  return (
    <Wrapper>
      <StyledForm> 
        <SearchBox>
          <StyledInput 
            type="text"
            onChange={(e)=>{
              setInputValue(e.target.value);
              // if(e.target.value === '') return;
              // submitHandle(e.target.value);
            }}
            value={inputValue}
            placeholder={'Enter Address'}
          />
          <ClearButton
            onClick={()=>setInputValue('')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            X
          </ClearButton>
        </SearchBox>
        <SearchButton
          type='submit'
          onClick={(e)=>{
            e.preventDefault();
            if(inputValue === '') return;
            submitHandle(inputValue);
          }}
          disabled={disable}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Search!
        </SearchButton>
      </StyledForm> 
      <Message>
        {error}
      </Message>
      <Message2>
        {fullAddress}
      </Message2>
      <Message2>
        {`Latitiude ${coords.lat}, Longtitude ${coords.lng}`}
      </Message2>
    </Wrapper>
  )
}

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  grid-area: search;
  display: flex;
  align-items: center;
  margin: 1rem 1rem .5rem;
  @media (min-width: ${MEDIA_GATE.desktop}px){
    max-width: 50vw;
    margin: 1rem auto;
  };
`;
const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 1.5rem;
  width: 100%;
`;
const StyledInput = styled.input`
  height: 2rem;
  width: 100%;
  padding: 0 2rem 0 .5rem;
  font-family: 'Raleway', sans-serif;
  border-radius: .5rem 0 0 .5rem;
  border: none;
  -webkit-box-shadow: 0px 3px 15px rgba(0,0,0,.5);
  -moz-box-shadow: 0px 3px 15px rgba(0,0,0,.5);
  box-shadow: 0px 3px 15px rgba(0,0,0,.5);
`;
const ClearButton = styled(motion.div)`
  display: inline-block;
  position: absolute;
  height: 1rem;
  width: 1rem;
  top: .25rem;
  right: .5rem;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  background: lightgray;
  border-radius: 20%;
  &:hover {
    cursor: pointer;
  }
`;
const SearchButton = styled(motion.button)`
  height: 2rem;
  margin-left: .15rem;
  font-family: 'Limelight', cursive;
  color: #2b2d2f;
  background: whitesmoke;
  border-radius: 0 .5rem .5rem 0;
  border: none;
  -webkit-box-shadow: 0px 3px 15px rgba(218,165,32,.5);
  -moz-box-shadow: 0px 3px 15px rgba(218,165,32,.5);
  box-shadow: 0px 3px 15px rgba(218,165,32,.5);
`;
const Message = styled.p`
  margin: 1rem auto;
  min-height: 1rem;
  font-size: .8rem;
  color: orange;
  font-family: 'Limelight', cursive;
`;
const Message2 = styled(Message)`
  color: whitesmoke;
  font-size: 1rem;
`;