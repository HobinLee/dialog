import { ReactElement, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { openDialog } from './dialog/Dialogs';
import { Toast } from './dialog/dialogs/Toast';

import { Dialog } from './dialog/Dialog';
import { TestDialog } from './dialog/TestDialog';
import { TestDialog2 } from './dialog/TestDialog2';
import { TestDialog3 } from './dialog/TestDialog3';
import { testState } from './store/test';
import { Confirm } from './dialog/dialogs/Confirm';
import { Alert } from './dialog/dialogs/Alert';
import { BottomSheet } from './dialog/dialogs/BottomSheet';
import { BottomSheetTest } from './tests/BottomSheetTest';
import { AlertTest } from './tests/AlertTest';
import { ConfirmTest } from './tests/ConfirmTest';
import { ToastTest } from './tests/ToastTest';
import { GlobalStateTest } from './tests/GlobalStateTest';
import { LocalStateTest } from './tests/LocalStateTest';
import { MultiDialogTest } from './tests/MultiDialogTest';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <div>
      <MultiDialogTest />
      <LocalStateTest />
      <GlobalStateTest />
      <ToastTest />
      <ConfirmTest />
      <AlertTest />
      <BottomSheetTest />
    </div>
  );
}

export default App;
