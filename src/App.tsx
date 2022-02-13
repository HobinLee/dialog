import { ReactElement } from 'react';

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
