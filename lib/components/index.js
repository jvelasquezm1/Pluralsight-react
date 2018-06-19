import ReactDom from 'react-dom';

import React from 'react';
import App from './App';

ReactDom.hydrate(
  <App/>,
  document.getElementById('root')
);
