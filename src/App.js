import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong!',
      };
    case 'INPUT_CHANGE':
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('/arsenalPlayers')
      .then(({ data }) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data.arsenalPlayers });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {state.loading ? 'Loading' : <Team state={state} />}
      </ThemeProvider>
    </>
  );
};
