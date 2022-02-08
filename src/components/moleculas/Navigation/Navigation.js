import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0 35px 0;
  margin: 0 auto;
`;

const StyledLink = styled(NavLink).attrs()`
  background-color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 10px;
  &.active {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s ease-in-out;
    box-shadow: 0px 3px 5px 0px rgba(66, 68, 90, 0.4);
  }
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Team</StyledLink>
      <StyledLink to="/pick-team">Set Team</StyledLink>
    </Wrapper>
  );
};
