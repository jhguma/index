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
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      imageSize: 1004,
    };
  }

  /* eslint-disable */
  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.updateWindowDimensions);

    this.setState({
      imageSize: window.innerWidth <= 896 ? 300 : 1004,
    });
  }
  /* eslint-disable */

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const imageSize = {};
    if (window.innerWidth <= 896) imageSize.isMobile = true;
    else imageSize.isMobile = false;
    // scope.width = window.innerWidth
    // scope.height = window.innerHeight
    this.setState({
      imageSize: imageSize.isMobile ? 300 : 1004,
    });

    // scope.width = window.innerWidth
    // scope.height = window.innerHeight
  }
  render() {
    const {imageSize} = this.state;
    return (
      <Body>
        <Header resize={imageSize} />
        <Content resize={imageSize} />
      </Body>
    );
  }
}

export default Home;
