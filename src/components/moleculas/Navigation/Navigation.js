import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0 60px 0;
  margin: 0 auto;
`;

const StyledButton = styled(Link).attrs()`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledButton to="/">Team</StyledButton>
      <StyledButton to="/pickTeam">Set Team</StyledButton>
    </Wrapper>
  );
};
