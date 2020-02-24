import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  padding: 1rem;

  p:first-child {
    text-align: left;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

const Skill = () => {
  return (
    <SkillContainer>
      <p>Skill</p>
    </SkillContainer>
  );
};

export default Skill;
