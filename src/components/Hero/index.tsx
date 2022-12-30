import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Layout from '../Layout';
import colors from '../../utils/colors';
import { device } from '../../utils/breakpoints';
import Background from './Background';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -102;
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

const IconContainer = styled.div`
  margin-top: 1rem;
  color: ${colors.text};

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;

type IconProps = {
  $first?: boolean;
};
const Icon = styled(FontAwesomeIcon)<IconProps>`
  margin: 0 ${(props) => (props.$first ? 0 : '1rem')};
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Background />
      <Layout>
        <HeroTextContainer>
          <HelloText>Hello, my name is</HelloText>
          <Name>Josh Chen</Name>
          <About>
            I’m a high school senior planning on majoring in CS. I enjoy
            software development and machine learning.
          </About>
          <IconContainer>
            <a
              href="https://github.com/joshchen984"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={faGithub} size="xl" $first />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-chen-ab499025b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={faLinkedin} size="xl" />
            </a>
          </IconContainer>
        </HeroTextContainer>
      </Layout>
    </Wrapper>
  );
};
