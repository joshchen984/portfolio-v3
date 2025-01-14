import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import { device } from '../../utils/breakpoints';
import Background from './Background';
import Button from '../Button';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HeroTextContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
`;

const HelloText = styled.p`
  color: ${colors.heading};
  margin: 0;

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;

const Name = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0;
  @media ${device.laptop} {
    font-size: 5rem;
  }
  @media ${device.laptopL} {
    font-size: 7rem;
  }
`;

const About = styled.p`
  max-width: 75%;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    max-width: 400px;
    font-size: 1.25rem;
  }

  @media ${device.laptopL} {
    font-size: 1.5rem;
    max-width: 450px;
  }
`;

const TextWrapper = styled.div`
  padding: 0 1rem;
  position: relative;
  @media ${device.tablet} {
    padding: 0 10rem;
  }

  @media ${device.laptop} {
    padding: 0 12rem;
  }

  @media ${device.laptopL} {
    padding: 0 20rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Background />
      <TextWrapper>
        <HeroTextContainer>
          <HelloText>Hello, my name is</HelloText>
          <Name>Josh Chen</Name>
          <About>
            I'm a CS major at the University of Pennsylvania interested in
            software development.
          </About>
          <ButtonContainer>
            <Button href="#projects" sameTab>
              View my projects
            </Button>
            <Button href="https://blog.joshchen984.com/">My Book Blog</Button>
          </ButtonContainer>
        </HeroTextContainer>
      </TextWrapper>
    </Wrapper>
  );
};
export default Hero;
