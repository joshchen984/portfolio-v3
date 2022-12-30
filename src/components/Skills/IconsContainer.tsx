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
      <Icon icon={<i className="devicon-html5-plain" />} skillName="HTML5" />
      <Icon icon={<i className="devicon-css3-plain" />} skillName="CSS3" />
      <Icon
        icon={<i className="devicon-javascript-plain" />}
        skillName="JavaScript"
      />
      <Icon
        icon={<i className="devicon-typescript-plain" />}
        skillName="TypeScript"
      />
      <Icon icon={<i className="devicon-react-original" />} skillName="React" />
      <Icon
        icon={<i className="devicon-materialui-plain" />}
        skillName="Material UI"
      />
      <Icon
        icon={<i className="devicon-github-original" />}
        skillName="GitHub"
      />
      <Icon icon={<i className="devicon-cplusplus-plain" />} skillName="C++" />
      <Icon icon={<i className="devicon-r-original" />} skillName="R" />
      <Icon icon={<i className="devicon-vscode-plain" />} skillName="VS Code" />
      <Icon
        icon={<i className="devicon-photoshop-plain" />}
        skillName="Photoshop"
      />
    </Container>
  );
};

export default IconsContainer;
