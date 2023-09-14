import './styles/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axe from '@axe-core/react';
import ko from 'axe-core/locales/ko.json';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000, { locale: ko });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
