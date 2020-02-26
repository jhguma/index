import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CareerContainer = styled.div`
  padding: 1rem;
  background-color: #f6f6f6;
  p:first-child {
    text-align: left;
    font-size: 1.5rem;
    margin: 0.5rem;

    span:first-child {
      color: #4863a0;
    }
  }
`;

const CareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarrerContent = styled.div`
  max-width: 40rem;
  padding: 15px;
  border: 1px solid #dcdcdc;
  border-radius: 1rem;
  text-align: left;
  background-color: #fff;
  font-size: ${props => props.resize === 300 && '11px'};
`;

const DateTime = styled.span`
  float: 'right';
  color: #74808a;
`;

const Career = props => {
  const {resize} = props;
  return (
    <CareerContainer>
      <p><span>C</span>areer</p>
      <CareerWrapper>
        <CarrerContent resize={resize}>
          <DateTime style={{float: 'right'}}>2019-01 ~ 2019-07</DateTime>
          <h4>비트캠프 강남지점 수료</h4>
          <dl>
            <dt>JAVA FrontEnd BackEnd 개발자 양성과정</dt>
            <dd>- Spring MVC Framework를 이용한 Web Application 개발 교육 이수</dd>
            <dd>- Servlet MVC를 이용한 Web Application 개발 교육 이수</dd>
            <dd>- Servlet MVC를 통한 홈페이지 “여행이 좋다” 개발</dd>
            <dd>- React와 Spring Boot를 이용한 홈페이지 “ABILITY” 개발</dd>
          </dl>
          <DateTime style={{float: 'right'}}>2019-10 ~ 2020-02</DateTime>
          <h4>TES SYSTEM 개발팀</h4>
          <dl>
            <dt>시장 유동성 공급을 위한 프로젝트 개발</dt>
            <dd>- python API 연동 React기반 LPMM Project 진행</dd>
            <dd>- Redux, TypeScript를 이용한 LPMM v2 Project 진행</dd>
            <dd>- React를 통한 Arena Page 개발</dd>
          </dl>
        </CarrerContent>
      </CareerWrapper>
    </CareerContainer>
  );
};

Career.propTypes = {
  resize: PropTypes.number,
};

Career.defaultProps = {
  resize: 1004,
};

export default Career;
