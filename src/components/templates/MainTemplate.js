import React from 'react';
import { Header } from '../moleculas/Header/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Structure from '../../assets/images/authBgc/BGC_auth.png';

const Wrapper = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  .structure {
    position: absolute;
    top: 0;
    left: 0;
    width: 15vmax;
    opacity: 0.3;
  }
`;

export const MainTemplate = () => {
  return (
    <Wrapper>
      <img className="structure" src={Structure} alt="structure" />
      <Header />
      <Outlet />
    </Wrapper>
  );
};
