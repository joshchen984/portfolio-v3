import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import { device } from '../../utils/breakpoints';
import Background from './Background';
import Socials from '../Socials';

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

  @media ${device.laptop} {
    max-width: 400px;
    font-size: 1.25rem;
  }

  @media ${device.laptopL} {
    font-size: 1.5rem;
    max-width: 450px;
  }
`;

const StyledSocials = styled(Socials)`
  margin-top: 1rem;

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem !important;
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

const Hero = () => {
  return (
    <Wrapper>
      <Background />
      <TextWrapper>
        <HeroTextContainer>
          <HelloText>Hello, my name is</HelloText>
          <Name>Josh Chen</Name>
          <About>
            I’m a high school senior planning on majoring in CS. I enjoy
            software development and machine learning.
          </About>
          <StyledSocials />
        </HeroTextContainer>
      </TextWrapper>
    </Wrapper>
  );
};
export default Hero;
