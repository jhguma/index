import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavBar} from 'Component';

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  background: url(${process.env.PUBLIC_URL}/image/background.png) top center no-repeat;
  background-size: 100%;
  height: ${props => (props.resize > 897 ? 1004 : 300)}px;
  color: #fff;
  opacity: 0.9;
  z-index: 200;
`;

const HeaderContent = styled.div`
  z-index: 190;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  div:last-child {
    font-size: 1.1rem;
  }
`;

const Header = props => {
  const {resize} = props;
  return (
    <HeaderWrapper resize={resize}>
      <NavBar resize={resize} />
      <HeaderContent>
        <div>JHGUMA BLOG</div>
        <div>Front-End Developer</div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  resize: PropTypes.number,
};

Header.defaultProps = {
  resize: 1004,
};

export default Header;
