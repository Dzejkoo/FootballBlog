import React from 'react';
import styled from 'styled-components';
import { Header } from '../organisms/Header/Header';

const Wrapper = styled.div``;

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
