import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import colors from '../utils/colors';
import { device } from '../utils/breakpoints';

const IconContainer = styled.div`
  color: ${colors.text};
  font-size: 1.25rem;
`;

type IconProps = {
  $first?: boolean;
};
const Icon = styled(FontAwesomeIcon)<IconProps>`
  margin: 0 ${(props) => (props.$first ? 0 : '1rem')};
  transition: color 0.25s;
  &:hover {
    color: ${colors.heading};
  }
`;

type SocialsProps = {
  className?: string;
};
const Socials = ({ className }: SocialsProps) => {
  return (
    <IconContainer className={className}>
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
  );
};

export default Socials;
