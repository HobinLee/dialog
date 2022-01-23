import { openDialog } from '@src/dialog/Dialogs';
import { TestDialog2 } from '@src/dialog/TestDialog2';

export const LocalStateTest = () => (
  <div>
    <hr />
    <h2>모달 계속 추가 테스트</h2>
    <button
      onClick={() => {
        openDialog(<TestDialog2 idx={0} />);
      }}
    >
      중복 모달 띄우기 (내부 상태)
    </button>
  </div>
);
