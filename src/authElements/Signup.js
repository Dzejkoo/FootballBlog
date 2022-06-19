import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import AuthBgc from '../assets/images/authBgc/auth-bgc.png';
import FootballAppLogo from '../assets/images/logo/FootballApp-logo.png';
import ArsenalLogoDesc from '../assets/images/logo/Arsenal-logo-desc.png';
import { theme } from '../assets/styles/theme';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    //check two input password
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failde create accound');
    }
    setLoading(false);
  }

  return (
    <Wrapper>
      <WrapperImg>
        <img src={FootballAppLogo} alt="logo" />
      </WrapperImg>
      <WrapperForm>
        <ContainerForm onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          {error ? <ErrorWrapper>{error}</ErrorWrapper> : null}

          <div id="email">
            <label>Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div id="password">
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <div id="password-confirm">
            <label>Password Confirmation</label>
            <input type="password" ref={passwordConfirmRef} required />
          </div>
          <button disabled={loading} type="submit">
            Sign Up
          </button>
          <div>
            Already have a account? <Link to="/login">Logi In</Link>
          </div>
        </ContainerForm>
      </WrapperForm>
    </Wrapper>
  );
}

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  position: relative;
  width: auto;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.logoRed};
    width: 35%;
    z-index: -1;
    height: 6px;
    bottom: 0;
    right: 0;
  }
`;

const ErrorWrapper = styled.div`
  padding: 20px 30px;
  text-align: center;
  background-color: rgba(183, 21, 21, 0.3);
  margin-bottom: 20px;
  border-radius: 8px;
`;

const WrapperImg = styled.div`
  width: 60%;
  background-image: url(${AuthBgc});
  background-size: cover;
  background-position: center;
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  @media screen and (max-width: 900px) {
    clip-path: none;
    position: relative;
    background-image: none;
    width: 80%;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: white;
    height: 70px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 0;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  &::before {
    content: '';
    position: absolute;
    height: 60px;
    width: 130px;
    background-image: url(${ArsenalLogoDesc});
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    background-color: white;
    @media screen and (max-width: 900px) {
      display: none;
    }
    bottom: 10%;
    left: 0;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 250px;
    @media screen and (max-width: 900px) {
      clip-path: none;
      position: relative;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  background-color: white;
`;

const WrapperForm = styled.div`
  width: 50%;
  @media screen and (max-width: 900px) {
    height: 80%;
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerForm = styled.form`
  max-width: 340px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.logoRed};
    border: 0;
    padding: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    border-radius: 7px;
    margin: 10px 0 20px 0;
    cursor: pointer;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    label {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.black};
      margin: 8px 0 10px 0;
    }
  }
  div:last-child {
    display: flex;
    justify-content: center;
    flex-direction: row;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.logoRed};
      padding-left: 10px;
    }
  }
`;
