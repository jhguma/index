import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StackOverFlow} from 'Component/Information';
import PostBox from './PostBox';

const ProjectContainer = styled.div`
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

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ability: 'Ability',
      lpV1: 'Lpmm 1.0 version',
      lpV2: 'Lpmm 2.0 version',
      arena: 'Arena Challenge',
      tag: {
        stackOverFlow: 'Spring Boot, React, React hooks, Redux, Redux Saga',
        lpV1: 'python, React, React hooks',
        lpV2: 'python, Type Script, React, React hooks',
        arena: 'python, React',
      },
      Modal: null,
    };
  }

  toggleOn = name => {
    const {resize} = this.props;
    const {toggleClose} = this;
    const {ability, lpV1, lpV2, arena, tag} = this.state;

    if (name === ability) {
      this.setState({
        Modal: <StackOverFlow resize={resize} tag={tag.stackOverFlow} onClick={toggleClose} />,
      });
    }
  };

  toggleClose = () => {
    this.setState({Modal: null});
  };

  render() {
    const {resize} = this.props;
    const {toggleOn} = this;
    const {ability, lpV1, lpV2, arena, tag, Modal} = this.state;
    return (
      <ProjectContainer id="project">
        <p>
          <span>P</span>roject
        </p>
        <PostBox resize={resize} imageName="stackOverFlow" title={ability} tag={tag.stackOverFlow} onClick={toggleOn}>
          한국형 Stack Over Flow 개발
        </PostBox>
        <PostBox resize={resize} imageName="lpV1Main" title={lpV1} tag={tag.lpV1} onClick={toggleOn}>
          코인시장의 유동성 공급을 위한 LP 페이지 제작
        </PostBox>
        <PostBox resize={resize} imageName="LpV2Main" title={lpV2} tag={tag.lpV2} onClick={toggleOn}>
          코인시장의 유동성 공급이 필요한 여러 코인을 관리하는 LP 페이지 제작
        </PostBox>
        <PostBox resize={resize} imageName="Arena-main" title={arena} tag={tag.arena} onClick={toggleOn}>
          유저간의 모의거래를 통해 랭킹에 따른 코인 지급 Game 페이지 제작
        </PostBox>
        {Modal}
      </ProjectContainer>
    );
  }
}

PostBox.propTypes = {
  resize: PropTypes.number,
};

PostBox.defaultProps = {
  resize: 1004,
};

export default Project;
