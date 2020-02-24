import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const Information = styled.div`
  display: flex;
`;

const ImageWrap = styled.div`
  width: 30%;
`;
const Readme = styled.div`
  width: 70%;
  text-align: left;
`;

const About = () => {
  return (
    <AboutContainer>
      <p>
        <span>A</span>bout
      </p>
      <Information>
        <ImageWrap>
          <img src=" " alt=" " />
          <div>Name (eN)</div>
          <div>Email</div>
          <div>Github</div>
        </ImageWrap>
        <Readme>About Me</Readme>
      </Information>
    </AboutContainer>
  );
};

export default About;
