import { cloneElement, ReactElement, ReactNode } from 'react';
import { createPortal, render } from 'react-dom';

export const dialogEvent = {
  open: 'openDialog',
  close: 'closeDialog',
};

let id = 0;

export const openDialog = (content: ReactElement) => {
  const dialogsWrap = document.getElementById('dialogs-wrap')!;

  const dialog = document.createElement('div');
  dialog.id = 'dialog-' + id;
  dialogsWrap.appendChild(dialog);
  id++;

  render(content, dialog);
};
