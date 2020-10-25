import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { DataProvider } from './DataContext';
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider>
        <Router>    
          <App />
        </Router>
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


