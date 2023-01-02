import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Layout from '../Layout';

import WriteMyVideoImage from '../../images/writemyvideo.png';
import ClassityImage from '../../images/classity.png';
import MathpathImage from '../../images/mathpath.png';
import Project from './Project';
import { useMediaQuery } from 'react-responsive';
import { device } from '../../utils/breakpoints';

const Wrapper = styled.section`
  margin-top: 4rem;
`;

const Projects = () => {
  const isTablet = useMediaQuery({ query: device.tablet });
  return (
    <Wrapper>
      <Layout smallPadding>
        <Heading marginBottom>Projects</Heading>
        <div>
          <Project
            image={WriteMyVideoImage}
            imageAlt="screenshot of WriteMyVideo"
            name="WriteMyVideo"
            description="A web app that turns a script into a complete slideshow video with narration. Users just upload a script, optional images, and an optional audio file. This application was designed for teachers and people with little video editing experience."
            link="https://www.writemyvideo.com/"
            buttonText="Demo"
            textRight
          />
          <Project
            image={ClassityImage}
            imageAlt="screenshot of Classity"
            name="Classity"
            description="Classity is a CRUD app that keeps track of users' grades in their classes. You can simulate how your grade will change with future assignments and weigh assignment types differently."
            link="https://github.com/joshchen984/Classity"
            buttonText="Source Code"
            textRight={!isTablet}
          />
          <Project
            image={MathpathImage}
            imageAlt="screenshot of MathPathSF"
            name="MathPathSF"
            description="A website that educates San Francisco public school students on the different math advancement options. The website has over 10,000 page views and 4,000 unique visitors."
            link="https://www.mathpathsf.com/"
            buttonText="Demo"
            textRight
          />
        </div>
      </Layout>
    </Wrapper>
  );
};

export default Projects;
