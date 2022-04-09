import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Pages />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
