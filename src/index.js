import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { usersApi } from './redux/usersApi';

ReactDOM.render(
  <ApiProvider api={usersApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>,
  document.getElementById('root')
);
