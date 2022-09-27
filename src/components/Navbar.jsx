import React from "react";
import styled from "styled-components";
import Flip from "react-reveal/Fade";

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <Flip>
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
        </Flip>
      </Wrapper>
    </div>
  );
};

export default Navbar;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 100px;
`;

const Left = styled.div`
  cursor: pointer;
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
    color: #02004e;
    font-size: 16px;
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
`;
