import React from "react";
import styled from "styled-components";
// import Flip from "react-reveal/Fade";

const Navbar = () => {
  return (
    <div>
      <Wrapper>
          <Left>Logo</Left>
          <Middle>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Category</a>
              </li>
              <li>
                <a href="/">Post a Job</a>
              </li>
              <li>
                <a href="/">Connect</a>
              </li>
            </ul>
          </Middle>
          <Right>Sign Up</Right>
      </Wrapper>
    </div>
  );
};

export default Navbar;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px); 
  z-index: 2;

`;

const Left = styled.div`
  cursor: pointer;
  margin-left: 100px;
`;

const Middle = styled.nav`
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  li {
    list-style: none;
    margin: 0 30px;
  }
  a {
    text-decoration: none;
    color: #3b3b3b;
    font-size: 16px;
    position: relative;
    display: flex;
    justify-content: center;
    transition: visibility 0.3s ease-in-out;

    &:hover {
      color: #02004e;
      /* font-weight: 600; */
    }

    &::before {
      content: "";
      position: absolute;
      background: #02004e;
      width: 5px;
      border-radius: 50%;
      height: 5px;
      top: 0;
      transform: translate(-50%, -50%);
      bottom: 0;
      visibility: hidden;
    }
    &:hover::before {
      visibility: visible;
    }
  }
`;

const Right = styled.button`
  outline: none;
  border: none;
  background: #fb510c;
  width: 130px;
  height: 40px;
  color: #ffffff;
  font-size: 16px;
  border: 1px solid #ef4703;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 100px;

  &:hover {
    background: transparent;
    color: #02004e;
  }
`;
