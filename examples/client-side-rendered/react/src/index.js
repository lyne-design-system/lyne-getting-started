import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from 'lyne-test/dist/esm/loader';

defineCustomElements();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
