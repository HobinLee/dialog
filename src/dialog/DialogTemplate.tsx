import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface DialogProps {
  className?: string;
  onOpen?: () => void;
  onClose?: (isConfirm?: boolean) => void;
}

export const DialogTemplate: FC<DialogProps> = ({
  onOpen,
  onClose,
  children,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisibile] = useState(true);

  const close = () => {
    const currentDialog: HTMLElement = ref.current!;

    setIsVisibile(false);
    currentDialog.onanimationend = () => {
      onClose?.();
      currentDialog.parentNode?.removeChild(currentDialog);
    };
  };

  useEffect(() => {
    onOpen?.();
  }, []);

  return (
    <Backdrop ref={ref} onClick={close}>
      <Dialog isVisible={isVisible}>{children}</Dialog>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
`;

const Dialog = styled.div<{ isVisible: boolean }>`
  width: 100px;
  height: 100px;
  background: white;

  animation: 0.3s linear ${({ isVisible }) => (!isVisible ? 'fadeOut' : '')};

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
