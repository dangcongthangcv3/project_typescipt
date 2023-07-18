import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCss from './Componet/GlobalCss/GlobalCss';
import App from './App';
import LogIn from './pages/Login/LogIn';
import clsx from 'clsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalCss>
    <div>
      <LogIn></LogIn>
    </div>
  </GlobalCss>
);