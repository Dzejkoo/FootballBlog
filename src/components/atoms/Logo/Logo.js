import React from 'react';
import { LogoWrapper, Arsenal } from './Logo.styles';
import logo from '../../../assets/images/logo/Arsenal-logo.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="Logo" />
      <Arsenal>
        <span>Arsenal</span>
        <span>Arsenal</span>
        <span>Arsenal</span>
      </Arsenal>
    </LogoWrapper>
  );
};
