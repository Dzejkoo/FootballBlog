import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../../moleculas/Navigation/Navigation';
import logo from '../../../assets/images/Logo/Arsenal-logo.png';

const Wrapper = styled.div``;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 80px;
    height: 93px;
    transform: translateX(10px);
  }
`;

const Arsenal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  span {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.logoRed};
    text-transform: uppercase;
    font-weight: 600;
    line-height: 80%;
    &:first-of-type {
      margin-left: 18px;
      color: white;
      text-shadow: -1px -1px 0 ${({ theme }) => theme.colors.logoRed}, 1px -1px 0 ${({ theme }) => theme.colors.logoRed},
        -1px 1px 0 ${({ theme }) => theme.colors.logoRed}, 1px 1px 0 ${({ theme }) => theme.colors.logoRed};
    }
    &:nth-child(2) {
      margin-left: 8px;
      position: relative;
      color: ${({ theme }) => theme.colors.logoRed};
    }
    &:last-of-type {
      color: white;
      text-shadow: -1px -1px 0 ${({ theme }) => theme.colors.logoRed}, 1px -1px 0 ${({ theme }) => theme.colors.logoRed},
        -1px 1px 0 ${({ theme }) => theme.colors.logoRed}, 1px 1px 0 ${({ theme }) => theme.colors.logoRed};
    }
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} alt="Logo" />
        <Arsenal>
          <span>Arsenal</span>
          <span>Arsenal</span>
          <span>Arsenal</span>
        </Arsenal>
      </LogoWrapper>
      <Navigation />
    </Wrapper>
  );
};
