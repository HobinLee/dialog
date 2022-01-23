import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Backdrop, blockClick } from '../Dialog';
import { useDialog } from '../useDialog';

interface ConfirmProps {
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const Confirm: FC<ConfirmProps> = ({ message, onCancel, onConfirm }) => {
  const ref = useRef(null);
  const [confirm, setConfirm] = useState(false);

  const { close, destroy, isVisible } = useDialog(ref);

  useEffect(() => {
    if (destroy) {
      if (confirm) {
        onConfirm?.();
      } else {
        onCancel?.();
      }
    }
  }, [destroy]);

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

        <ButtonWrap>
          <DialogButton
            onClick={e => {
              closeWithStopPropagation(e);
              setConfirm(true);
            }}
          >
            확인
          </DialogButton>
          <DialogButton onClick={closeWithStopPropagation}>취소</DialogButton>
        </ButtonWrap>
      </ConfirmWrap>
    </Backdrop>
  );
};

export const ConfirmWrap = styled.div`
  text-align: center;
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

export const DialogButton = styled.button`
  width: 100%;
  height: 50px;

  padding: 0;

  background: #fff;

  border: 0px solid;

  font-size: 16px;

  text-align: center;

  :active {
    background: #eee;
  }

  :focus {
    outline: none;
  }

  & + & {
    margin-left: -1px;

    border-left: 1px solid rgba(0, 0, 0, 0.15);
  }
`;
