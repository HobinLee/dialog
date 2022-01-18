import React, { ReactElement } from 'react';

import { openDialog } from './dialog/dialog';
import { DialogContainer } from './dialog/DialogContainer';
import { DialogTemplate } from './dialog/DialogTemplate';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <button
        onClick={() => openDialog(<DialogTemplate>ㅎㅇㅎㅇ</DialogTemplate>)}
      >
        모달창 열기
      </button>
      <DialogTemplate>1</DialogTemplate>
      <DialogTemplate onClose={() => console.log('close 2')}>2</DialogTemplate>
      <DialogTemplate>3</DialogTemplate>
    </>
  );
}

export default App;
