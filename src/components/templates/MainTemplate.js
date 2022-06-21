import React from 'react';
import { Header } from '../moleculas/Header/Header';
import styled from 'styled-components';
import { Outlet, useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Wrapper = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainTemplate = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={350}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
};
