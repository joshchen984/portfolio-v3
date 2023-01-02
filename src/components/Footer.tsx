import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  line-height: 1.5rem;
  margin-top: 5rem;
`;

const StyledSocials = styled(Socials)`
  margin: 0.75rem 0;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocials />
      <p>Designed and Created by Josh Chen</p>
    </StyledFooter>
  );
};

export default Footer;
