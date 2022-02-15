import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import styled from 'styled-components';
import { Logo } from '../../atoms/Logo/Logo';

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  );
};
