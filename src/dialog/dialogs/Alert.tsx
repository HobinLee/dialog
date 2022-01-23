import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Backdrop, blockClick } from '../Dialog';
import { useDialog } from '../useDialog';
import { ConfirmWrap, DialogButton } from './Confirm';

interface AlertProps {
  message: string;
  onClose?: () => void;
}

export const Alert: FC<AlertProps> = ({ message, onClose }) => {
  const ref = useRef(null);

  const { close, destroy, isVisible } = useDialog(ref, { onClose });

  const closeWithStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return destroy ? null : (
    <Backdrop
      ref={ref}
      isVisible={isVisible}
      onClick={closeWithStopPropagation}
    >
      <ConfirmWrap onClick={blockClick}>
        {message}
        <DialogButton onClick={closeWithStopPropagation}>확인</DialogButton>
      </ConfirmWrap>
    </Backdrop>
  );
};
