import { testState } from '@src/store/test';
import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { openDialog } from './Dialogs';
import { DialogTemplate } from './DialogTemplate';

export const TestDialog3: FC<{
  num: number;
  setNum: (num: number) => void;
}> = ({ num, setNum }) => {
  return (
    <DialogTemplate>
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
    </DialogTemplate>
  );
};
