import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0 60px 0;
  margin: 0 auto;
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <Link to="/">Team</Link>
      <Link to="/pick-team">Set Team</Link>
    </Wrapper>
  );
};
