import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Dialogs } from './dialog/Dialogs';

const $root = document.getElementById('root');

$root &&
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <Dialogs />
    </React.StrictMode>,
    $root,
  );
