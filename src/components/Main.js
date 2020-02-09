import React, { 
  // useState,
  // useEffect
} from "react";
import styled from 'styled-components'

import Nav from "./Nav";

const Wrapper = styled.div`
position: absolute;
justify-content: center;
top: 16vh;
left: 20vh;
right: 20vh;
bottom: 16vh;
background-color: rgba(80, 85, 94, 0.7);
padding-top: 20vh;
box-shadow: 0px 0px 125px 50px rgba(80,85,94,0.5);
`

const Name = styled.div`
font-size: 4rem;
display: flex;
flex-direction: row;
justify-content: center;
text-transform: uppercase;
opacity: 1;
padding: 1.4rem 0;
border-top: 1px solid;
border-bottom: 1px solid;
`

const Description = styled.div`
  padding-top: 2rem;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`



const Main = () => {
  return (
    <>
      <Wrapper>
        <Name>Web Developer</Name>
        <Description>Looking for a job</Description>
        <Nav />
      </Wrapper>
    </>
  );
};

export default Main;
