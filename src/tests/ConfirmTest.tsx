import { openDialog } from '@src/dialog/Dialogs';
import { Confirm } from '@src/dialog/dialogs/Confirm';

export const ConfirmTest = () => (
  <div>
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
  </div>
);
