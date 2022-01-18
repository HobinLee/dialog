import { ReactNode } from 'react';

export const dialogEvent = {
  open: 'openDialog',
  close: 'closeDialog',
};

export const openDialog = (content: ReactNode) => {
  const openEvent = new CustomEvent(dialogEvent.open, {
    detail: {
      content,
    },
  });

  console.log('open Dialog', openEvent);

  window.dispatchEvent(openEvent);
};

export const closeDialog = () => {
  const closeEvent = new CustomEvent(dialogEvent.close);

  console.log('close Dialog', closeEvent);

  window.dispatchEvent(closeEvent);
};
