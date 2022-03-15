import React from 'react';
import { StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Team</StyledLink>
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/matches">Matches</StyledLink>
    </Wrapper>
  );
};
