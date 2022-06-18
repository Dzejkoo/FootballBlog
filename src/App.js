import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';
import TeamProvider from './providers/TeamProvider';
import { MainTemplate } from './components/templates/MainTemplate';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Spinner } from './components/atoms/Spinner/Spinner';
import { News } from './components/organisms/News/News';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Matches } from './components/organisms/Matches/Matches';
import { PremierLeague } from './components/organisms/Matches/PremierLeague/PremierLeague';
import { CarabaoCup } from './components/organisms/Matches/CarabaoCup/CarabaoCup';
import { AllMatches } from './components/organisms/Matches/AllMatches/AllMatches';

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

  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <TeamProvider>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={350}>
              <Routes>
                <Route path="/" element={state.loading ? <Spinner /> : <Team state={state} />} />
                <Route path="/news" element={<News />} />
                <Route path="/matches" element={<Matches />}>
                  <Route index element={<AllMatches />} />
                  <Route path="premierleague" element={<PremierLeague />} />
                  <Route path="caraboucup" element={<CarabaoCup />} />
                  <Route path="allmatches" element={<AllMatches />} />
                </Route>
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </TeamProvider>
      </MainTemplate>
    </ThemeProvider>
  );
};
