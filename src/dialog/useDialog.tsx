import { useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

export interface DialogProps {
  ref?: any;
  onOpen?: () => void;
  onClose?: () => void;
  onDestroy?: (isConfirm?: boolean) => void;
}

export const useDialog = (ref: any, dialogProps?: DialogProps) => {
  const [isVisible, setIsVisibile] = useState(true);
  const [destroy, setDestroy] = useState(false);

  const close = () => {
    const currentDialog: HTMLElement = ref.current!;

    setIsVisibile(false);
    dialogProps?.onClose?.();

    currentDialog.onanimationend = (e: AnimationEvent) => {
      dialogProps?.onDestroy?.();
      currentDialog.onanimationend = null;
      setDestroy(true);
    };
  };

  useEffect(() => {
    dialogProps?.onOpen?.();
    return () => {};
  }, []);

  return { close, destroy, isVisible };
};
