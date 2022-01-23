import { FC, MouseEventHandler, ReactEventHandler, useRef } from 'react';
import styled from 'styled-components';
import { DialogProps, useDialog } from './useDialog';

export const blockClick: ReactEventHandler = e => e.stopPropagation();

export const Dialog: FC<DialogProps> = ({ children, ...dialogProps }) => {
  const ref = useRef(null);
  const { destroy, close, isVisible } = useDialog(ref, dialogProps);

  const closeAndStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return destroy ? null : (
    <Backdrop ref={ref} isVisible={isVisible} onClick={closeAndStopPropagation}>
      <DialogWrap onClick={blockClick}>{children}</DialogWrap>
    </Backdrop>
  );
};

export const Backdrop = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  animation: 0.3s linear
    ${({ isVisible }) => (!isVisible ? 'fadeOut' : 'fadeIn')};
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const DialogWrap = styled.div`
  width: auto;
  height: auto;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;
