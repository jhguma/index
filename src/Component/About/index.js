import React from 'react';
import PropTypes from 'prop-types';
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
  flex-direction: ${props=> props.resize === 300 && 'column'}
`;

const ImageWrap = styled.div`
  flex: 1 1 auto;
`;
const Readme = styled.div`
  width:  ${props=> props.resize === 300 ? '100' : '70'}%;
  text-align: left;
`;

const Profile = styled.div`
  font-size: 13px;
`;

const About = props => {
  const {resize} = props;

  return (
    <AboutContainer>
      <p>
        <span>A</span>bout
      </p>
      <Information resize={resize}>
        <ImageWrap>
          <img src={`${process.env.PUBLIC_URL}/image/profileImage.png`} alt=" " />
          <div>
            <b>정진호 (Jeong Jin ho)</b>
          </div>
          <Profile>bnbn2400@gamil.com</Profile>
          <Profile>https://github.com/jhguma</Profile>
        </ImageWrap>
        <Readme resize={resize}>
          Readme About Me...
        </Readme>
      </Information>
    </AboutContainer>
  );
};

About.propTypes = {
  resize: PropTypes.number,
};

About.defaultProps = {
  resize: 1004,
};

export default About;
