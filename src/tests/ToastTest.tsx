import { openDialog } from '@src/dialog/Dialogs';
import { Toast } from '@src/dialog/dialogs/Toast';

export const ToastTest = () => (
  <div>
    <hr />
    <h2>Toast 테스트</h2>
    <button
      onClick={() => {
        openDialog(<Toast message="토스트 메세지" />);
      }}
    >
      toast
    </button>
  </div>
);
