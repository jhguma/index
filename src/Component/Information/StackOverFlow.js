import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'Component/Information/modal.css';
import Tag from 'Component/Tag';
import Slider from 'Component/Slider';
import Slideshow from 'Component/Slider/a'

const BackGround = styled.div`
  position: fixed;
  top: ${props => (props.resize === 300 ? 0 : 3.3)}rem;
  bottom: ${props => (props.resize === 300 ? 3.3 : 0)}rem;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.9);
`;

const ModalContainer = styled.div`
  border-radius: 5px;
  max-width: ${props => (props.resize === 300 ? 80 : 50)}%;
  height: 90%;
  margin: auto;
  padding: 0.625rem;
  background-color: #fff;
  overflow: auto;
`;

const ModalFooter = styled.div`
  max-width: ${props => (props.resize === 300 ? 79.5 : 49.5)}%;
  background: #d3d3d3;
  padding: 1rem;
  margin: auto;
  margin-top: 0.4rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #e2e2e2;
  }
`;

const ImageSlide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-right: auto;
  position: relative;
  &::before {
    width: 90px;
    position: absolute;
    content: '프로젝트 명';
    top: -26px;
    font-weight: normal;
    font-size: 13px;
    color: #3680b0;
    text-align: left;
  }
`;

class StackOverFlow extends Component {
  render() {
    const {resize, tag, onClick} = this.props;
    window.onkeydown = event => {
      if (event.keyCode === 27) {
        onClick();
      }
    };
    return (
      <BackGround className="backdropStyle" id="stackoverflow" resize={resize}>
        <ModalContainer resize={resize}>
            <Slideshow slideImages={['stackOverFlow','lpV1Main']} />
          <div className="ModalHeaderWrap">
            <Title>Ability</Title>
            <Tag tags={tag} />
          </div>
          <div className="ModalBody">content</div>
        </ModalContainer>
        <ModalFooter resize={resize} onClick={onClick}>
          Close
        </ModalFooter>
      </BackGround>
    );
  }
}

StackOverFlow.propTypes = {
  resize: PropTypes.number,
  tag: PropTypes.string,
  onClick: PropTypes.func,
};

StackOverFlow.defaultProps = {
  resize: 1004,
  tag: '',
  onClick: () => {},
};

export default StackOverFlow;
