import ReactDom from 'react-dom';

import React from 'react';
import App from 'components/App';

ReactDom.hydrate(
  <App initialData = {window.initialData}/>,
  document.getElementById('root')
);
