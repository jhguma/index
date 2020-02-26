import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {About, Career, Skill, Project} from 'Component';

const ContentWrapper = styled.div`
  width: 75%;
  text-align: center;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  z-index : 100;
`;

const Content = props => {
  const {resize} = props;

  return (
    <ContentWrapper>
      <About resize={resize} />
      <Career resize={resize} />
      <Skill resize={resize} />
      <Project resize={resize} />
    </ContentWrapper>
  );
};

Content.propTypes = {
  resize: PropTypes.number,
};

Content.defaultProps = {
  resize: 1004,
};

export default Content;
