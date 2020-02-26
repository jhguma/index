import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: black;
  opacity: 0.9;
  z-index: 500;
  bottom: ${props => props.resize === 300 && '0px'};
`;

const Nav = styled.div`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    color: #e2e2e2;
  }
`;

const NavRemote = styled.div`
  position: absolute;
  padding: 1rem;
  background-color: black;
  border-radius: 1rem;
  right: 1rem;
  top: 48rem;

  & > .topBtn {
    cursor: pointer;
    padding: 0.5rem;
    border: 2px solid #e2e2e2;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
  }
  & > .BottomBtn {
    margin-top: 0.5rem;
    border: 2px solid #e2e2e2;
    border-radius: 1rem;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

class NavBar extends Component {
  onClick = e => {
    const {id} = e.target;
    scroll.scrollTo(document.querySelector(id).offsetTop - 65);
  };

  ScrollBottom = () => {
    scroll.scrollToBottom();
  };

  ScrollTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const {onClick, ScrollTop, ScrollBottom} = this;
    const {resize} = this.props;
    return (
      <NavWrapper resize={resize}>
        <Nav id="#about" onClick={onClick}>
          About
        </Nav>
        <Nav id="#carrer" onClick={onClick}>
          Carrer
        </Nav>
        <Nav id="#skill" onClick={onClick}>
          Skill
        </Nav>
        <Nav id="#project" onClick={onClick}>
          Project
        </Nav>

        <NavRemote resize={resize}>
          <div className="topBtn" onClick={ScrollTop}>
            ▲
          </div>
          <div>-----</div>
          <div className="BottomBtn" onClick={ScrollBottom}>
            ▼
          </div>
        </NavRemote>
      </NavWrapper>
    );
  }
}

NavBar.propTypes = {
  resize: PropTypes.number,
};

NavBar.defaultProps = {
  resize: 1004,
};

export default NavBar;
