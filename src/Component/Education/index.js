import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
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

const Education = () => {
  return (
    <EducationContainer>
      <p>Education</p>
    </EducationContainer>
  );
};

export default Education;
