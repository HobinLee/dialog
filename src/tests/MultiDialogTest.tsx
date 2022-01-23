import { Dialog } from '@src/dialog/Dialog';
import { openDialog } from '@src/dialog/Dialogs';

export const MultiDialogTest = () => (
  <div>
    <h2>모달창 동시 호출 테스트</h2>
    <button
      onClick={() => {
        openDialog(<Dialog>A</Dialog>);
        openDialog(<Dialog>B</Dialog>);
        openDialog(<Dialog>C</Dialog>);
      }}
    >
      한번에 여러 모달창 나오기
    </button>
  </div>
);
