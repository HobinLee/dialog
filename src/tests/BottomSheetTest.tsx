import { openDialog } from '@src/dialog/Dialogs';
import { BottomSheet } from '@src/dialog/dialogs/BottomSheet';
import { Confirm } from '@src/dialog/dialogs/Confirm';
import { FC, useState } from 'react';

const list = new Array(10).fill(0);

const TestDialogBottom: FC<{
  setSelected: (num: number) => void;
}> = ({ setSelected }) => (
  <BottomSheet>
    {({ close }) => (
      <div style={{ height: '100px' }}>
        <ul>
          {list.map((_, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  openDialog(
                    <Confirm
                      message={`${idx}로 설정 하시겠습니까?`}
                      onConfirm={() => {
                        setSelected(idx);
                        close();
                      }}
                    />,
                  );
                }}
              >
                {idx}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </BottomSheet>
);

export const BottomSheetTest = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <hr />
      <h2>BottomSheet 테스트</h2>
      <p>selected: {selected ?? '선택 없음'}</p>
      <button
        onClick={() => {
          openDialog(
            <TestDialogBottom
              setSelected={(num: number) => setSelected(num)}
            />,
          );
        }}
      >
        BottomSheet 테스트
      </button>
    </div>
  );
};
