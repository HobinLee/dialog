import { testState } from '@src/store/test';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { openDialog } from './Dialogs';
import { Dialog } from './Dialog';

export const TestDialog2: FC<{ idx: number }> = ({ idx }) => {
  const [num, setNum] = useRecoilState(testState);

  return (
    <Dialog>
      {idx}
      <button
        onClick={() => {
          openDialog(<TestDialog2 idx={idx + 1} />);
        }}
      >
        다이얼로그 또 추가
      </button>

      <button onClick={() => setNum(num - 1)}>-</button>
      {num}
      <button onClick={() => setNum(num + 1)}>+</button>
    </Dialog>
  );
};
