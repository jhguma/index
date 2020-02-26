import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  height: 1000px;
  padding: 1rem;

  p:first-child {
    text-align: left;
    font-size: 1.5rem;
    margin: 0.5rem;

    span:first-child {
      color: #4863a0;
    }
  }
`;

const Project = () => {
  return (
    <ProjectContainer id="project">
      <p>
        <span>P</span>roject
      </p>
      프로젝트 소개입니다.
    </ProjectContainer>
  );
};

export default Project;
