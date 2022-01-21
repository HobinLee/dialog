import { ReactElement } from 'react';
import { render } from 'react-dom';

export const dialogEvent = {
  open: 'openDialog',
  close: 'closeDialog',
};

const openDialog = (content: ReactElement) => {
  render(content, document.getElementById('dialogs')!);
};
