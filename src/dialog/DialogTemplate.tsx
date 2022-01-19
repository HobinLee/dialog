import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import styled from 'styled-components';

interface DialogProps {
  className?: string;
  onOpen?: () => void;
  onDestroy?: (isConfirm?: boolean) => void;
  id?: string;
}

export const DialogTemplate: FC<DialogProps> = ({
  onOpen,
  onDestroy,
  children,
  id,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisibile] = useState(true);

  const close: MouseEventHandler<HTMLDivElement> = e => {
    const currentDialog: HTMLElement = ref.current!;

    setIsVisibile(false);
    currentDialog.onanimationend = (e: AnimationEvent) => {
      onDestroy?.();

      const dialog = currentDialog.parentNode!;
      const dialogsWrap = dialog.parentNode!;

      dialogsWrap.removeChild(dialog);
    };

    e.stopPropagation();
  };

  useEffect(() => {
    onOpen?.();
    return () => {};
  }, []);

  return (
    <Backdrop ref={ref} isVisible={isVisible} onClick={close} id={id}>
      <Dialog>{children}</Dialog>
    </Backdrop>
  );
};

const Backdrop = styled.div<{ isVisible: boolean }>`
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

const Dialog = styled.div`
  width: 100px;
  height: 100px;
  background: white;
`;
