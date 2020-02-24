import React from 'react';
import styled from 'styled-components';
import {About, Education, Skill} from 'Component';

const ContentWrapper = styled.div`
  width: 75%;
  text-align: center;
  border: 1px solid #e2e2e2;
  padding: 1rem;
  background-color: #fff;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <About />
      <Education />
      <Skill />
      <div>content5 입니다</div>
    </ContentWrapper>
  );
};

export default Content;
