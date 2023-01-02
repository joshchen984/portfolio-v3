import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledButton = styled.a`
  background-color: rgba(0, 0, 0, 0);
  padding: 0.75rem 1rem;
  text-decoration: none;
  cursor: pointer;
  color: ${colors.heading};
  border: 1px solid ${colors.heading};
  width: fit-content;
  transition: background-color 0.25s;
  &:hover {
    background-color: rgba(248, 204, 122, 0.1);
  }
  &: visited {
    color: ${colors.heading};
  }
  border-radius: 5px;
`;

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  sameTab?: boolean;
};
const Button = ({ children, href, className, sameTab }: ButtonProps) => {
  if (sameTab) {
    return (
      <StyledButton href={href} className={className}>
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
