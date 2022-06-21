import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import styled from 'styled-components';
import { Logo } from '../../atoms/Logo/Logo';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const Header = () => {
  return (
    <Wrapper>
      <ContainerTopHeader>
        <Logo />
        <Auth>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </Auth>
      </ContainerTopHeader>

      <Navigation />
    </Wrapper>
  );
};

const ContainerTopHeader = styled.div``;

const Auth = styled.div``;
