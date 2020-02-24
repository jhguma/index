import React, {Component} from 'react';
import styled from 'styled-components';
import Header from 'Page/Layout/Header';
import Content from 'Page/Layout/Content';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {
  render() {
    return (
      <Body>
        <Header />
        <Content />
      </Body>
    );
  }
}

export default Home;
