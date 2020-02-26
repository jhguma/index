import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  padding: 1rem;

  p:first-child {
    text-align: left;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

const Project = () => {
  return (
    <ProjectContainer>
      <p>Project</p>
      프로젝트 소개입니다.
    </ProjectContainer>
  );
};

export default Project;
