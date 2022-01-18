import { cloneElement, ReactElement, ReactNode } from 'react';
import { createPortal, render } from 'react-dom';

export const dialogEvent = {
  open: 'openDialog',
  close: 'closeDialog',
};

export const openDialog = (content: ReactElement) => {
  render(content, document.getElementById('dialogs')!);
};
