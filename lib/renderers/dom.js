import ReactDom from 'react-dom';

import React from 'react';
import App from 'components/App';
import StateApi from '../DataApi';

const store = new StateApi(window.initialData);

ReactDom.hydrate(
  <App store = {store}/>,
  document.getElementById('root')
);
