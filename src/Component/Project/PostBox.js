import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tag from 'Component/Tag';

const PostBoxWrapper = styled.div`
  display: ${props => (props.resize === 300 ? 'block' : 'flex')};
  margin-top: 1rem;
  margin-bottom: 2rem;
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
  max-width: 456.66px;

  &::before{
    position: absolute;
    top : -1.3rem;
    font-size : 12px;
    color: #74808a;
    content : '${props => props.title}'
  }

`;

class PostBox extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  render() {
    const {resize, title, tag, imageName, children, onClick} = this.props;

    return (
      <PostBoxWrapper resize={resize} data-aos="fade-up" onClick={()=> onClick(title)}>
        <PostImage resize={resize}>
          {/* TODO - 자동 슬라이드쇼 적용필요 3초마다 넘어가게- */}
          <img src={`${process.env.PUBLIC_URL}/image/${imageName}.png`} width="100%" height="100%" alt="Ability" />
        </PostImage>

        <PostInputWrapper>
          <PostInput title="Project Name">
            <b>{title || 'title'}</b>
          </PostInput>
          <PostInput title="Tag" type="tag">
            <Tag tags={tag} />
          </PostInput>
          <PostInput title="Explanation" type="content">
            {children || 'content'}
          </PostInput>
        </PostInputWrapper>
        {/* TODO - Click시 Modal 상세페이지 나타나야함 */}
      </PostBoxWrapper>
    );
  }
}

PostBox.propTypes = {
  resize: PropTypes.number,
  title: PropTypes.string,
  tag: PropTypes.string,
  imageName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.object, PropTypes.array),
};

PostBox.defaultProps = {
  resize: 1004,
  title: '',
  tag: '',
  imageName: '',
  onClick: () => {},
  children: null,
};

export default PostBox;
