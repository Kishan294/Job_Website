import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Information } from "./Information";

const About = () => {
  return (
    <>
      <div>
        <Wrapper>
          <Top>
            <Fade Bottom>
              <h3>How it’s Work</h3>
            </Fade>

            <h1>Follow Easy 4 Steps</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Top>
          <Bottom>
            <Box>
              <Corner>
                <img src="images/corner.svg" alt="" />
              </Corner>
              <img src="images/search_icon.png" alt="" />
              <Title>Search Job</Title>
              <Desc>First you have to Search job here</Desc>
            </Box>
            <Box>
              <Corner>
                <img src="images/corner1.svg" alt="" />
              </Corner>
              <img src="images/resume_icon.png" alt="" />
              <Title>Cv/Resume</Title>
              <Desc>First you have to Search job here</Desc>
            </Box>
            <Box>
              <Corner>
                <img src="images/corner2.svg" alt="" />
              </Corner>
              <img src="images/create_account.png" alt="" />
              <Title>Create Account</Title>
              <Desc>First you have to Search job here</Desc>
            </Box>
            <Box>
              <Corner>
                <img src="images/corner3.svg" alt="" />
              </Corner>
              <img src="images/apply.png" alt="" />
              <Title>Apply Them</Title>
              <Desc>First you have to Search job here</Desc>
            </Box>
          </Bottom>
        </Wrapper>
      </div>
      <Information />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fb510c;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 10px;
  }

  p {
    width: 760px;
    text-align: center;
    font-size: 16px;
  }

  h1 {
    margin: 0px;
    font-size: 36px;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  padding: 10px 40px;
  background: #ffffff;
  box-shadow: 5px 20px 33px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  height: 270px;
  width: 270px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    margin-bottom: 25px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #797979;
`;

const Corner = styled.div`
  position: absolute;
  width: 270px;
  height: 270px;
  left: -1px;
  top: 0;
  right: 0;
  bottom: 0;
`;

export default About;
