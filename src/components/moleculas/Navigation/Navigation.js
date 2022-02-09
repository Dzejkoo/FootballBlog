import React from 'react';
import { StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Team</StyledLink>
      <StyledLink to="/pick-team">Set Team</StyledLink>
    </Wrapper>
  );
};
