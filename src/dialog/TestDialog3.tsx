import { FC } from 'react';
import { openDialog } from './Dialogs';
import { Dialog } from './Dialog';

export const TestDialog3: FC<{
  num: number;
  setNum: (num: number) => void;
}> = ({ num, setNum }) => {
  return (
    <Dialog>
      <button
        onClick={() => {
          openDialog(<TestDialog3 num={num} setNum={setNum} />);
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
