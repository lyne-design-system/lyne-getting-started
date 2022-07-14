import React from 'react';
import '@sbb-esta/lyne-components/dist/lyne-components/lyne-components.css';
import './css/fonts.css';

function App() {
  return (
    <sbb-button
      label="lyne-cta-button used in React"
      icon
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m17.8436,12.1382-3.99-3.99196-.7072.70693,3.1366,3.13823H5v1h11.287l-3.1413,3.1555.7086.7056,3.99-4.008.3519-.3535-.3526-.3528z"></path></svg>
    </sbb-button>
  );
}

export default App;
