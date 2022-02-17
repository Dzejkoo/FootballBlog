import React from 'react';
import { Header } from '../moleculas/Header/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
