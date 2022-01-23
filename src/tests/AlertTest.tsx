import { openDialog } from '@src/dialog/Dialogs';
import { Alert } from '@src/dialog/dialogs/Alert';

export const AlertTest = () => (
  <div>
    <hr />
    <h2>Alert 테스트</h2>
    <button
      onClick={() => {
        openDialog(
          <Alert
            message="서버연결에 실패했습니다"
            onClose={() => {
              console.log('close alert');
            }}
          />,
        );
      }}
    >
      alert
    </button>
  </div>
);
