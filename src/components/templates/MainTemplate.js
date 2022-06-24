import React from 'react';
import { Header } from '../moleculas/Header/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};
