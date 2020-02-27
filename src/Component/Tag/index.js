import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagBox = styled.span`
  padding: 0.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
  margin-right: 0.4rem;
  font-size: 12px;
  background: black;
  color: #fff;
  border-radius: 0.5rem;
  text-align: center;
`;

const Tag = props => {
  const {tags} = props;

  const makeTagBox = tag => {
    if (!tag) return null;
    const tagList = tag.replace(/\s/gi, '').split(',');
    return tagList.map((tagName, index) => {
      return <TagBox key={`${tagName + index}`}>{tagName}</TagBox>;
    });
  };

  return makeTagBox(tags);
};

Tag.propTypes = {
  tags: PropTypes.string,
};

Tag.defaultProps = {
  tags: '',
};

export default Tag;
