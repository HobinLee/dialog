import { openDialog } from '@src/dialog/Dialogs';
import { BottomSheet } from '@src/dialog/dialogs/BottomSheet';

export const BottomSheetTest = () => (
  <div>
    <hr />
    <h2>BottomSheet 테스트</h2>
    <button
      onClick={() => {
        openDialog(
          <BottomSheet>
            <div style={{ height: '100px' }}>안녕</div>
          </BottomSheet>,
        );
      }}
    >
      중복 모달 띄우기 (전역 상태)
    </button>
  </div>
);
