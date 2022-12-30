import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

const StyledImage = styled(GatsbyImage)`
  height: 100vh;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -101;

  @media ${device.laptopL} {
    width: 120%;
  }
`;

export const Background = () => {
  const { backgroundImage, backgroundImageBig } = useStaticQuery(
    graphql`
      query MyQuery {
        backgroundImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1400
              quality: 70
              webpOptions: { quality: 80 }
            )
          }
        }
        backgroundImageBig: file(relativePath: { eq: "hero-big.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 100
              webpOptions: { quality: 100 }
            )
          }
        }
      }
    `
  );

  const isLaptopL = useMediaQuery({ query: device.laptopL });
  let image;

  if (isLaptopL) {
    image = getImage(backgroundImageBig);
  } else {
    image = getImage(backgroundImage);
  }
  return (
    <>
      <StyledImage image={image!} alt="hero image" />
    </>
  );
};

export default Background;
