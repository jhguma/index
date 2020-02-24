import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 75%;
  text-align: center;
  border: 1px solid #e2e2e2;
  padding: 1rem;
`;

const Container = styled.div`
  padding: 1rem;

  div:first-child {
    text-align: left;
    font-size: 1.5rem;
  }
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Container>
        <div>About</div>
        <div>asdasd asdasd asdasd</div>
      </Container>
      <div>content2 입니다</div>
      <div>content3 입니다</div>
    </ContentWrapper>
  );
};

export default Content;
