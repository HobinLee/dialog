import { FC } from 'react';
import { openDialog } from './Dialogs';
import { DialogTemplate } from './DialogTemplate';
export const TestDialog: FC<{ idx: number }> = ({ idx }) => (
  <DialogTemplate>
    {idx}
    <button
      onClick={() => {
        openDialog(<TestDialog idx={idx + 1} />);
      }}
    >
      다이얼로그 또 추가
    </button>
  </DialogTemplate>
);
