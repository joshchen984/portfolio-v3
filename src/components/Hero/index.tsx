import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

const Wrapper = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 65% 75%;
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
      Hero
    </Wrapper>
  );
};
