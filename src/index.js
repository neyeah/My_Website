import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext'; // Ensure the path to ThemeContext.js is correct
import App from './App';
import './index.css';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
