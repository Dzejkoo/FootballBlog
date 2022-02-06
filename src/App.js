import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Team } from './components/organisms/Team/Team';
import { PickTeam } from './components/organisms/PickTeam/PickTeam';
import TeamProvider from './providers/TeamProvider';
// import Spinner from './components/atoms/Spinner/Spinner';
import { MainTemplate } from './components/templates/MainTemplate';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <TeamProvider>
            <Routes>
              {/* <Route exact path="/" element={<Navigate to="/team" />} /> */}
              <Route path="/" element={<Team />} />
              <Route path="/pickTeam" element={<PickTeam />} />
            </Routes>
          </TeamProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
