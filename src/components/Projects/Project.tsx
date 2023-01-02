import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import colors from '../../utils/colors';
import Button from '../Button';

type AlignmentProps = {
  textRight?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5rem;
`;

const TextWrapper = styled.div<AlignmentProps>`
  text-align: center;
  width: 100%;
  z-index: 5;


  @media ${device.tablet} {
    width: 60%;
    margin-${(props) => (props.textRight ? 'left' : 'right')}: -25%;
  }

  @media ${device.laptop} {
    width: 50%;
    margin-${(props) => (props.textRight ? 'left' : 'right')}: -15%;
  }
`;
const StyledImg = styled.img`
  text-align: center;
  max-width: 100%;
  z-index: -5;

  @media ${device.tablet} {
    width: 65%;
  }
`;

const Name = styled.h3<AlignmentProps>`
  color: ${colors.heading};
  text-align: center;
  font-size: 1.25rem;

  @media ${device.tablet} {
    text-align: ${(props) => (props.textRight ? 'right' : 'left')};
  }
`;

const Description = styled.p<AlignmentProps>`
  margin-bottom: 3rem;

  @media ${device.tablet} {
    color: #88868d;
    background-color: #29273b;
    padding: 1rem;
    border-radius: 10px;
    text-align: ${(props) => (props.textRight ? 'right' : 'left')};
  }
`;

const StyledButton = styled(Button)<AlignmentProps>`
  @media ${device.tablet} {
    margin-${(props) => (props.textRight ? 'left' : 'right')}: 25%;
  }
`;

type ProjectProps = {
  image: any;
  imageAlt: string;
  name: string;
  description: string;
  link: string;
  buttonText: string;
  textRight?: boolean;
};
const Project = ({
  image,
  imageAlt,
  name,
  description,
  link,
  buttonText,
  textRight,
}: ProjectProps) => {
  const Image = <StyledImg src={image} alt={imageAlt} />;
  const Text = (
    <TextWrapper textRight={textRight}>
      <Name textRight={textRight}>{name}</Name>
      <Description textRight={textRight}>{description}</Description>
      <StyledButton href={link} textRight={textRight}>
        {buttonText}
      </StyledButton>
    </TextWrapper>
  );

  if (textRight) {
    return (
      <Wrapper>
        {Image}
        {Text}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {Text}
      {Image}
    </Wrapper>
  );
};

export default Project;
