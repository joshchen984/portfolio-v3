import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../Layout';
import colors from '../../utils/colors';

const Wrapper = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 65% 75%;
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
`;

const Name = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0;
`;

const About = styled.p`
  max-width: 75%;
`;

const IconContainer = styled.div`
  margin-top: 1rem;
  color: ${colors.text};
`;

type IconProps = {
  first?: boolean;
};
const Icon = styled(FontAwesomeIcon)<IconProps>`
  margin: 0 ${(props) => (props.first ? 0 : '1rem')};
`;

export const Hero = () => {
  const { backgroundImage } = useStaticQuery(
    graphql`
      query MyQuery {
        backgroundImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 80
              webpOptions: { quality: 100 }
            )
          }
        }
      }
    `
  );
  const image = getImage(backgroundImage);
  const bgImage = convertToBgImage(image);
  return (
    <Wrapper Tag="section" {...bgImage}>
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
              <Icon icon={faGithub} size="xl" first />
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
