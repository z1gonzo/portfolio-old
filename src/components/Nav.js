import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 5vh;
  left: 0;
  right: 0;
  padding: 1rem 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;


const Nav = () => {
  return (
    <>
      <Menu>
        <Link to="/">Main</Link>
        <Link to="/works">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Menu>
    </>
  );
};

export default Nav;
