import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import GlobalStyle from 'globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/VocabBuilder">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
