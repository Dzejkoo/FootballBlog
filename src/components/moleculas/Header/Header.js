import React, { useContext, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../../../providers/ThemeProvider';
import { Wrapper, ContainerTopHeader, Auth, UserIconStyled, Switcher } from './Header.styled';
import { User } from '../../../assets/images/vector/User';
import { LogoFootballApp } from '../../../assets/images/vector/Logo';

export const Header = () => {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { themeToggler, checked } = useContext(ModeContext);

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to logout');
    }
  }
  return (
    <Wrapper>
      <ContainerTopHeader>
        <LogoFootballApp />
        <Auth>
          <button onClick={handleLogOut}>Log Out</button>

          <span>
            {currentUser.email} <User />
          </span>
          <Switcher>
            <input type="checkbox" defaultChecked={checked} onClick={(e) => themeToggler(e)} />
            <span></span>
          </Switcher>
        </Auth>
      </ContainerTopHeader>
      {error ? `${error}` : null}

      <Navigation />
    </Wrapper>
  );
};
