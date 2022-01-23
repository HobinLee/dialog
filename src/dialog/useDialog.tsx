import { useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

export interface DialogProps {
  ref?: any;
  onOpen?: () => void;
  onClose?: (isConfirm?: boolean) => void;
}

export const useDialog = (ref: any, dialogProps?: DialogProps) => {
  const [isVisible, setIsVisibile] = useState(true);
  const [destroy, setDestroy] = useState(false);

  const close = (withAnimation: boolean = true) => {
    if (withAnimation) {
      const currentDialog: HTMLElement = ref.current!;
      setIsVisibile(false);

      currentDialog.onanimationend = (e: AnimationEvent) => {
        dialogProps?.onClose?.();
        currentDialog.onanimationend = null;
        setDestroy(true);
      };
    } else {
      dialogProps?.onClose?.();
      setDestroy(true);
    }
  };

  useEffect(() => {
    dialogProps?.onOpen?.();
    return () => {
      dialogProps?.onClose?.();
    };
  }, []);

  return { close, destroy, isVisible };
};
