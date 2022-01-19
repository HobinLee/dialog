import React, { ReactElement } from 'react';

import { openDialog } from './dialog/dialog';
import { DialogTemplate } from './dialog/DialogTemplate';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <button
        onClick={() =>
          openDialog(
            <DialogTemplate
              onDestroy={() => openDialog(<DialogTemplate>2</DialogTemplate>)}
            >
              1
            </DialogTemplate>,
          )
        }
      >
        모달창 닫길 때 다른 모달창 나오기
      </button>
      <button
        onClick={() => {
          openDialog(<DialogTemplate>A</DialogTemplate>);
          openDialog(<DialogTemplate>B</DialogTemplate>);
          openDialog(<DialogTemplate>C</DialogTemplate>);
        }}
      >
        한번에 여러 모달창 나오기
      </button>
    </>
  );
}

export default App;
