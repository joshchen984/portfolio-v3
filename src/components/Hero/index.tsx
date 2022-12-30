import React from 'react';
import styled from 'styled-components';
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
        </HeroTextContainer>
      </Layout>
    </Wrapper>
  );
};
