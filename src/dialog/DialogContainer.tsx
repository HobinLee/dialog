import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { dialogEvent } from './dialog';

interface DialogEvent extends Event {
  detail: {
    content: ReactNode;
  };
}

export const DialogContainer: FC = () => {
  const createNewPortal = (e: DialogEvent) => {
    const Dialog = e.detail.content;

    createPortal(Dialog, document.querySelector('#dialogs')!);
  };

  const addEvents = () => {
    window.addEventListener(dialogEvent.open, e =>
      createNewPortal(e as DialogEvent),
    );
  };

  useEffect(() => {
    addEvents();
  }, []);

  return <div></div>;
};
