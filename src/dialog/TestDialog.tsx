import { FC, useState } from 'react';
import { openDialog } from './Dialogs';
import { Dialog } from './Dialog';

export const TestDialog: FC<{ idx: number }> = ({ idx }) => {
  const [num, setNum] = useState(0);

  return (
    <Dialog>
      {idx}
      <button
        onClick={() => {
          openDialog(<TestDialog idx={idx + 1} />);
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
