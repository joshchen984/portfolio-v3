import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import colors from '../../utils/colors';

const Container = styled.div`
  width: 50%;
  text-align: center;
  margin-bottom: 2rem;

  i {
    font-size: 5rem;
    color: white;
  }

  @media ${device.tabletS} {
    width: 25%;
  }
  @media ${device.laptop} {
    width: 16%;
  }
`;

const Name = styled.p`
  margin-top: 20px;
`;
type IconProps = {
  icon: any;
  skillName: string;
};
const Icon = ({ skillName, icon }: IconProps) => {
  return (
    <Container>
      {icon}
      <Name>{skillName}</Name>
    </Container>
  );
};

export default Icon;
