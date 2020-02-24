import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  font-size: 1.8rem;
  padding-top : 5rem;
  padding-bottom: 5rem;
  text-align: center;
  background-color: #39a693;
  color: #fff;
  opacity: 0.9;

  div:last-child{
    font-size: 1.1rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>JHGUMA BLOG</div>
      <div>Front-End Developer</div>
    </HeaderWrapper>
  );
};

export default Header;
