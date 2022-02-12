import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';
import TeamProvider from './providers/TeamProvider';
import { MainTemplate } from './components/templates/MainTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from './components/atoms/Spinner/Spinner';
import { News } from './components/organisms/News/News';

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <TeamProvider>
            <Routes>
              <Route path="/" element={state.loading ? <Spinner /> : <Team state={state} />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </TeamProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
