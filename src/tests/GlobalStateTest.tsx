import { openDialog } from '@src/dialog/Dialogs';
import { TestDialog2 } from '@src/dialog/TestDialog2';
import { testState } from '@src/store/test';
import { useRecoilValue } from 'recoil';

export const GlobalStateTest = () => {
  const num = useRecoilValue(testState);

  return (
    <div>
      <hr />
      <h2>전역 상태 테스트</h2>
      <p>num: {num}</p>
      <button
        onClick={() => {
          openDialog(<TestDialog2 idx={0} />);
        }}
      >
        중복 모달 띄우기 (전역 상태)
      </button>
    </div>
  );
};
