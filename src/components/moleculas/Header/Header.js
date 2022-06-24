import React, { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import styled from 'styled-components';
import { Logo } from '../../atoms/Logo/Logo';
import { useAuth } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../../assets/images/icon/user.svg';
import LogoApp from '../../../assets/images/logo/FootballApp-logo.png';

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const Header = () => {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
        <img src={LogoApp} alt="Logo" />
        <Auth>
          <div>
            <button onClick={handleLogOut}>Log Out</button>
            <span>
              {currentUser.email} <UserIconStyled />
            </span>
          </div>
        </Auth>
      </ContainerTopHeader>
      {error ? `${error}` : null}

      <Navigation />
    </Wrapper>
  );
};

const ContainerTopHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  img {
    max-width: 200px;
    align-self: center;
  }
`;

const UserIconStyled = styled(UserIcon)`
  width: 16px;
  margin-left: 5px;
`;

const Auth = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  div {
    font-size: ${({ theme }) => theme.fontSize.m};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 300;
    position: relative;
    span {
      display: flex;
      padding-top: 10px;
      flex-direction: row;
      align-items: center;
    }
    button {
      background-color: ${({ theme }) => theme.colors.white};
      border: none;
      color: ${({ theme }) => theme.colors.black};
      padding: 8px 15px;
      font-weight: 300;
      font-size: ${({ theme }) => theme.fontSize.s};
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
        color: white;
        transition: 0.3s ease-in-out;
      }
    }
  }
`;
