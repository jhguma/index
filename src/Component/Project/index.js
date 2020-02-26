import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostBox from './PostBox';

const ProjectContainer = styled.div`
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

const Project = props => {
  const {resize} = props;
  return (
    <ProjectContainer id="project">
      <p>
        <span>P</span>roject
      </p>
      <PostBox resize={resize} imageName="stackOverFlow" title="Ability" tag="Spring Boot, React, React hooks, Redux, Redux Saga">
        한국형 Stack Over Flow 개발
      </PostBox>
      <PostBox resize={resize} imageName="lpV1Main" title="Lpmm version:1.0" tag="python, React, React hooks">
        코인시장의 유동성 공급을 위한 LP 페이지 제작
      </PostBox>
    </ProjectContainer>
  );
};

PostBox.propTypes = {
  resize: PropTypes.number,
};

PostBox.defaultProps = {
  resize: 1004,
};

export default Project;
