import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from 'lyne-test/loader';

defineCustomElements();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
