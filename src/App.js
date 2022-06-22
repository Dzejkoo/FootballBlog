import React, { useReducer, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';
import TeamProvider from './providers/TeamProvider';
import { MainTemplate } from './components/templates/MainTemplate';
import { Routes, Route } from 'react-router-dom';
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

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <TeamProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <MainTemplate />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </TeamProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
