import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes, {array} from 'prop-types';

const PostBoxWrapper = styled.div`
  display: ${props => (props.resize === 300 ? 'block' : 'flex')};
  margin-top: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 1rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;

const PostImage = styled.div`
  margin: 1rem;
  max-width: 897px;
`;

const PostInputWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const PostInput = styled.div`
  margin: 0.3rem;
  margin-top: 1.5rem;
  height: ${props => !props.type && '20px'};
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #e2e2e2;
  border-radius: 1rem;
  word-break:break-all;
  line-height: 1.5rem;
  position : relative;

  &::before{
    position: absolute;
    top : -1.3rem;
    font-size : 12px;
    color: #74808a;
    content : '${props => props.title}'
  }

`;

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

class PostBox extends Component {
  makeTagBox = tag => {
    if (!tag) return null;
    const tagList = tag.replace(/\s/gi, '').split(',');
    return tagList.map((tagName, index) => {
      return <TagBox key={`${tagName + index}`}>{tagName}</TagBox>;
    });
  };

  render() {
    const {resize, title, tag, imageName, children} = this.props;
    const {makeTagBox} = this;

    return (
      <PostBoxWrapper resize={resize}>
        <PostImage resize={resize}>
          {/* TODO - 자동 슬라이드쇼 적용필요 3초마다 넘어가게- */}
          <img src={`${process.env.PUBLIC_URL}/image/${imageName}.png`} width="100%" height="100%" alt="Ability" />
        </PostImage>

        <PostInputWrapper>
          <PostInput title="Project Name"> {title || 'title'}</PostInput>
          <PostInput title="Tag" type="tag">
            {makeTagBox(tag) || 'tag'}
          </PostInput>
          <PostInput title="Explanation" type="content">
            {children || 'content'}
          </PostInput>
        </PostInputWrapper>
      </PostBoxWrapper>
    );
  }
}

PostBox.propTypes = {
  resize: PropTypes.number,
  title: PropTypes.string,
  tag: PropTypes.string,
  imageName: PropTypes.string,
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.object, PropTypes.array),
};

PostBox.defaultProps = {
  resize: 1004,
  title: '',
  tag: '',
  imageName: '',
  children: null,
};

export default PostBox;
