import FootballAppLogo from '../assets/images/logo/FootballApp-logo.png';
import { Wrapper, WrapperImg, WrapperForm, Title, ContainerForm, ErrorWrapper, ForgotPassword } from './AuthElements.styled';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
      console.log('login succes');
    } catch {
      setError('Failed to sign in');
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
          <Title>Log In</Title>
          {error ? <ErrorWrapper>{error}</ErrorWrapper> : null}

          <div id="email">
            <label>Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div id="password">
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <button disabled={loading} type="submit">
            Log In
          </button>
          <ForgotPassword>
            <Link to="/forgot-password">Forgot password?</Link>
          </ForgotPassword>
          <div>
            Need an accound? <Link to="/signup">Sing Up</Link>
          </div>
        </ContainerForm>
      </WrapperForm>
    </Wrapper>
  );
}
