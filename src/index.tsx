import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { Dialogs } from './dialog/Dialogs';

const $root = document.getElementById('root');

$root &&
  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
        <Dialogs />
      </RecoilRoot>
    </React.StrictMode>,
    $root,
  );
