import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Layout from '../Layout';
import IconsContainer from './IconsContainer';

const Wrapper = styled.section`
  margin-top: 4rem;
`;

const Subheading = styled.p`
  margin-bottom: 3rem;
`;
const Skills = () => {
  return (
    <Wrapper>
      <Layout>
        <Heading>My Suitcase of Skills</Heading>
        <Subheading>The tools I use to bring your ideas to life:</Subheading>
        <IconsContainer />
      </Layout>
    </Wrapper>
  );
};
export default Skills;
