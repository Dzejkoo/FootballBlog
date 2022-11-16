import React, { useRef, useState } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import FootballAppLogo from '../assets/images/logo/FootballApp-logo.png';
import { Wrapper, WrapperImg, WrapperForm, Title, ContainerForm, ErrorWrapper, ButtonLogin } from './AuthElements.styled';

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
          <ButtonLogin disabled={loading} type="submit">
            Sign Up
          </ButtonLogin>
          <div>
            Already have a account? <Link to="/login">Logi In</Link>
          </div>
        </ContainerForm>
      </WrapperForm>
    </Wrapper>
  );
}
