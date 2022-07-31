import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../providers/AuthProvider';
import { ReactComponent as FacebookIcon } from '../assets/images/icon/Facebook-icon.svg';

export const FacebookAuth = () => {
  const { facebookLogin, loading } = useAuth();
  console.log(loading);

  return (
    <ButtonFacebookStyled onClick={facebookLogin} disabled={loading}>
      <FacebookIcon />
      Facebook
    </ButtonFacebookStyled>
  );
};

export const ButtonFacebookStyled = styled.button`
  background-color: #3b5998;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0;
  margin: 0px 0 20px;
  border-radius: 7px;
  cursor: pointer;
  svg {
    width: 25px;

    fill: white;
  }
`;
