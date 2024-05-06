import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const IconsContainer = () => {
  return (
    <Container>
      <Icon icon={<i className="devicon-python-plain" />} skillName="Python" />
      <Icon icon={<i className="devicon-cplusplus-plain" />} skillName="C++" />

      <Icon
        icon={<i className="devicon-javascript-plain" />}
        skillName="JavaScript"
      />
      <Icon
        icon={<i className="devicon-typescript-plain" />}
        skillName="TypeScript"
      />
      <Icon icon={<i className="devicon-java-plain" />} skillName="Java" />
      <Icon icon={<i className="devicon-csharp-plain" />} skillName="C#" />
      <Icon icon={<i className="devicon-html5-plain" />} skillName="HTML5" />
      <Icon icon={<i className="devicon-css3-plain" />} skillName="CSS3" />
      <Icon icon={<i className="devicon-react-original" />} skillName="React" />
      <Icon icon={<i className="devicon-nodejs-plain" />} skillName="Node.js" />
      <Icon
        icon={<i className="devicon-postgresql-plain" />}
        skillName="PostgreSQL"
      />
      <Icon icon={<i className="devicon-git-plain" />} skillName="Git" />
    </Container>
  );
};

export default IconsContainer;
