import React, { ReactElement } from 'react';
import { openDialog } from './dialog/Dialogs';

import { DialogTemplate } from './dialog/DialogTemplate';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <button
        onClick={() =>
          openDialog(
            <DialogTemplate
              onClose={() => openDialog(<DialogTemplate>2</DialogTemplate>)}
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
          openDialog(
            <DialogTemplate>
              A
              <button
                onClick={() => openDialog(<DialogTemplate>B</DialogTemplate>)}
              >
                다음 모달
              </button>
            </DialogTemplate>,
          );
        }}
      >
        한번에 여러 모달창 나오기
      </button>
    </>
  );
}

export default App;
