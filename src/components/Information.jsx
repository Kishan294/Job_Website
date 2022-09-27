import React from "react";
import styled from "styled-components";

export const Information = () => {
  return (
    <div>
      <Wrapper>
        <Left>
          <img src="images/image2.svg" alt="" />
        </Left>
        <Right>
          <h1>We always help to help you with!</h1>
          <Info>
            <Box>
              <Logo>
                <img src="images/growth.svg" alt="" />
              </Logo>
              <Content>
                <h3>Enhance Your Career</h3>
                <p>First you have to Search job here</p>
              </Content>
            </Box>
            <Box>
              <Logo>
                <img src="images/message.svg" alt="" />
              </Logo>
              <Content>
                <h3>Communications with other</h3>
                <p>First you have to Search job here</p>
              </Content>
            </Box>
            <Box>
              <Logo>
                <img src="images/tick.svg" alt="" />
              </Logo>
              <Content>
                <h3>Find job with good career</h3>
                <p>First you have to Search job here</p>
              </Content>
            </Box>
          </Info>
        </Right>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 80px;

  h1 {
    width: 380px;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
  }
`;
const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
  margin-top: 30px;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background: #fb510c;
  box-shadow: 4px 8px 20px rgba(251, 81, 12, 0.5);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: none;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  &:nth-child(1) {
    margin-top: 5px;
  }

  &:nth-child(2) ${Logo} {
    background: #025af3;
    box-shadow: 4px 8px 20px rgba(2, 90, 243, 0.25);

    &:hover {
      box-shadow: none;
    }
  }

  &:nth-child(3) ${Logo} {
    background: #fff508;
    box-shadow: 4px 8px 20px rgba(255, 245, 8, 0.4);

    &:hover {
      box-shadow: none;
    }
  }
`;

const Content = styled.div`
  margin-left: 20px;

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    margin: 0px;
    margin-bottom: -5px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #797979;
    margin-top: 0px;
    width: 160px;
  }
`;
