import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <Wrapper>
      <LeftCol>
        <h1>
          Find Your <span>Dream Job</span> Now It’s Easy.
        </h1>
        <p>
          Thousands of Jobs here. Find Your New Job Today! New Job Posting Today
        </p>
        <Bottom>
          <Left>
            <FaSearch />
            <input type="text" placeholder="Job title or keyword" />
          </Left>
          <Right>Search</Right>
        </Bottom>
      </LeftCol>
      <RightCol>
        <img src="images/image_1.png" alt="" srcset="" />
      </RightCol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 100px;
`;

const LeftCol = styled.div`
  width: 686px;
  margin-top: 150px;
  p {
    width: 344px;
    color: #797979;
  }
  h1 {
    font-size: 65px;
    font-weight: 600;
    margin-bottom: 15px;
    line-height: 1.3;

    span {
      color: #fb510c;
    }
  }
`;

const Bottom = styled.div`
  width: 700px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
  overflow: auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Left = styled.div`
  font-size: 16px;
  color: #797979;
  display: flex;
  align-items: center;

  input {
    margin-left: 10px;
    outline: none;
    border: none;
  }
`;

const Right = styled.div`
  width: 150px;
  height: 47px;
  background: #fb510c;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  cursor: pointer;
`;

const RightCol = styled.div`
  width: 700px;
`;

export default Hero;
