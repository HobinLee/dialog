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

interface Props {}

function App({}: Props): ReactElement {
  const [num1, setNum] = useState(0);
  const num2 = useRecoilValue(testState);
  return (
    <>
      <h2>모달창 동시 호출 테스트</h2>
      <button
        onClick={() => {
          openDialog(<Dialog>A</Dialog>);
          openDialog(<Dialog>B</Dialog>);
          openDialog(<Dialog>C</Dialog>);
        }}
      >
        한번에 여러 모달창 나오기
      </button>

      <hr />
      <h2>모달 계속 추가 테스트</h2>
      <button
        onClick={() => {
          openDialog(<TestDialog idx={0} />);
        }}
      >
        중복 모달 띄우기 (내부 상태)
      </button>
      <hr />
      <h2>전역 상태 테스트</h2>
      <p>num: {num2}</p>
      <button
        onClick={() => {
          openDialog(<TestDialog2 idx={0} />);
        }}
      >
        중복 모달 띄우기 (전역 상태)
      </button>
      <hr />
      <h2>Toast 테스트</h2>
      <button
        onClick={() => {
          openDialog(<Toast message="토스트 메세지" />);
        }}
      >
        toast
      </button>
      <hr />
      <h2>Confirm 테스트</h2>
      <button
        onClick={() => {
          openDialog(
            <Confirm
              message="컨펌?"
              onConfirm={() => {
                console.log('on confirm');
              }}
              onCancel={() => {
                console.log('on cancel');
              }}
            />,
          );
        }}
      >
        confirm
      </button>
      <hr />
      <h2>Alert 테스트</h2>
      <button
        onClick={() => {
          openDialog(
            <Alert
              message="서버연결에 실패했습니다"
              onClose={() => {
                console.log('close alert');
              }}
            />,
          );
        }}
      >
        confirm
      </button>
      <hr />
      <h2>BottomSheet 테스트</h2>
      <button
        onClick={() => {
          openDialog(
            <BottomSheet>
              <div style={{ height: '100px' }}>안녕</div>
            </BottomSheet>,
          );
        }}
      >
        중복 모달 띄우기 (전역 상태)
      </button>
    </>
  );
}

export default App;
