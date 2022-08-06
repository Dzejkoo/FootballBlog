import React, { useReducer, useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';
import TeamProvider from './providers/TeamProvider';
import { MainTemplate } from './components/templates/MainTemplate';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Spinner } from './components/atoms/Spinner/Spinner';
import { News } from './components/organisms/News/News';
import { Matches } from './components/organisms/Matches/Matches';
import { PremierLeague } from './components/organisms/Matches/PremierLeague/PremierLeague';
import { CarabaoCup } from './components/organisms/Matches/CarabaoCup/CarabaoCup';
import { AllMatches } from './components/organisms/Matches/AllMatches/AllMatches';
import PrivateRoute from './authElements/PrivateRoute';
import Login from './authElements/Login';
import Signup from './authElements/Signup';
import { AuthProvider, useAuth } from './providers/AuthProvider';
import { lightTheme } from './assets/styles/theme';
import { darkTheme } from './assets/styles/theme';
import { ModeContext, ModeProvider } from './providers/ThemeProvider';
import NewsProvider from './providers/NewsProvider';

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
  const { theme } = useContext(ModeContext);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <AuthProvider>
        <TeamProvider>
          <NewsProvider>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainTemplate />}>
                  <Route index element={state.loading ? <Spinner /> : <Team state={state} />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/news/:post_title" element={<News />} />
                  <Route path="/matches" element={<Matches />}>
                    <Route index element={<AllMatches />} />
                    <Route path="premierleague" element={<PremierLeague />} />
                    <Route path="caraboucup" element={<CarabaoCup />} />
                    <Route path="allmatches" element={<AllMatches />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </NewsProvider>
        </TeamProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
