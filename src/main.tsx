import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

// Cambiar createRoot por render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // No necesitas usar '!'
);
