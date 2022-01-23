import { ReactElement, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { openDialog } from './dialog/Dialogs';
import { Toast } from './dialog/dialogs/Toast';

import { Dialog } from './dialog/DialogTemplate';
import { TestDialog } from './dialog/TestDialog';
import { TestDialog2 } from './dialog/TestDialog2';
import { TestDialog3 } from './dialog/TestDialog3';
import { testState } from './store/test';

interface Props {}

function App({}: Props): ReactElement {
  const [num1, setNum] = useState(0);
  const num2 = useRecoilValue(testState);
  return (
    <>
      <h2>버튼 onClose 테스트</h2>
      <button
        onClick={() =>
          openDialog(
            <Dialog onClose={() => openDialog(<Dialog>2</Dialog>)}>1</Dialog>,
          )
        }
      >
        모달창 닫길 때 다른 모달창 나오기
      </button>
      <hr />
      <h2>버튼 onDestory 테스트</h2>
      <button
        onClick={() =>
          openDialog(
            <Dialog onClose={() => openDialog(<Dialog>2</Dialog>)}>1</Dialog>,
          )
        }
      >
        모달창 닫길 때 다른 모달창 나오기
      </button>
      <hr />
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
      <h2>Props Drilling 테스트</h2>
      <p>num: {num1}</p>
      <button
        onClick={() => {
          openDialog(<TestDialog3 num={num1} setNum={setNum} />);
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
    </>
  );
}

export default App;
