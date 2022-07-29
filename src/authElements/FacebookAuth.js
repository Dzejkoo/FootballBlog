import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

export const FacebookAuth = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { facebookLogin } = useAuth();
  console.log(loading);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await facebookLogin();
      navigate('/');
      console.log('login succes');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <button onClick={handleSubmit} disabled={loading}>
      Login with facebook
    </button>
  );
};
