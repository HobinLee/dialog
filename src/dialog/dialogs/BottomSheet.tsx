import { FC, MouseEventHandler, ReactEventHandler, useRef } from 'react';
import styled from 'styled-components';
import { Backdrop, blockClick } from '../Dialog';
import { DialogProps, useDialog } from '../useDialog';

interface BottomSheetProps extends DialogProps {
  title?: string;
}

export const BottomSheet: FC<BottomSheetProps> = ({
  children,
  ...dialogProps
}) => {
  const ref = useRef(null);
  const { destroy, close, isVisible } = useDialog(ref, dialogProps);

  const closeAndStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return destroy ? null : (
    <Backdrop ref={ref} isVisible={isVisible} onClick={closeAndStopPropagation}>
      <BottomSheetWrap isVisible={isVisible} onClick={blockClick}>
        {children}
      </BottomSheetWrap>
    </Backdrop>
  );
};

const BottomSheetWrap = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 10px 10px 0 0;

  overflow: hidden;

  animation: 0.3s forwards
    ${({ isVisible }) => (isVisible ? 'openTranslateY' : 'closeTranslateY')};

  @keyframes openTranslateY {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes closeTranslateY {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;
