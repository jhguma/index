import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 60%;
  height: 300px;
`;

const ImageWrapper = styled.ul`
  transition: left 2s;
  height: 100%;

  & li {
    background: #ccc;
    list-style-type: none;
    margin: auto;
  }
`;
const PageNaitionWrap = styled.ul`
  text-align: center;
  top: -50px;
  z-index: 1000;
  position: relative;
`;

const PageNaition = styled.li`
  width: 10px;
  height: 10px;
  border-radius: 1rem;
  cursor: pointer;
  background-color: black;
  display: inline-block;
  margin-right: 8px;
`;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  updateSlide = newState => {
    this.setState({active: newState});
  };

  setImageFile = () => {
    const {slides} = this.props;
    const {active} = this.state;

    return (
      <li slides={slides}>
        <img src={`${process.env.PUBLIC_URL}/image/${slides[active]}.png`} alt=" " width="100%" height="100%" />
      </li>
    );
  };

  togglePageButton = () => {
    const {slides} = this.props;
    const {updateSlide} = this;
    return slides.map((item, index) => {
      return <PageNaition onClick={() => updateSlide(index)} />;
    });
  };

  render() {
    const {setImageFile, togglePageButton} = this;

    return (
      <SliderContainer>
        <SliderWrapper>
          <ImageWrapper>{setImageFile()}</ImageWrapper>
        </SliderWrapper>
        <div>
          <PageNaitionWrap>{togglePageButton()}</PageNaitionWrap>
        </div>
      </SliderContainer>
    );
  }
}

Slider.propTypes = {
  resize: PropTypes.number,
  slides: PropTypes.array,
};

Slider.defaultProps = {
  resize: 1004,
  slides: [],
};

export default Slider;
