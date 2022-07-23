import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { worker } from './mock /browsers';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModeProvider } from './providers/ThemeProvider';

worker.start();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ModeProvider>
        <App />
      </ModeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
