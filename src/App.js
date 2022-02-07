import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';
import TeamProvider from './providers/TeamProvider';
import Spinner from './components/atoms/Spinner/Spinner';
import { MainTemplate } from './components/templates/MainTemplate';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PickTeam } from './components/organisms/PickTeam/PickTeam';

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
              <Route path="/pick-team" element={<PickTeam />} />
            </Routes>
          </TeamProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
