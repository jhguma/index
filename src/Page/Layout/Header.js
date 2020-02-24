import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  background: url(${process.env.PUBLIC_URL}/image/background.png) top center no-repeat;
  background-size: 100%;
  height: ${props => (props.resize > 897 ? 1004 : 300)}px;
  color: #fff;
  opacity: 0.9;

  div:last-child {
    font-size: 1.1rem;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      imageSize: 1004,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateWindowDimensions);

    this.setState({
      imageSize: window.innerWidth <= 896 ? 300 : 1004,
    });
  }

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
      <HeaderWrapper resize={imageSize}>
        <div>JHGUMA BLOG</div>
        <div>Front-End Developer</div>
      </HeaderWrapper>
    );
  }
}

export default Header;
