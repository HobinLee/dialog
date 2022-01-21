import {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

let id = 0;

export const Dialogs: FC = () => {
  const [dialogs, setDialogs] = useState<ReactNode[]>([]);

  const addDialog = (e: Event) => {
    setDialogs([
      ...dialogs,
      cloneElement((e as DialogEvent).detail.dialog, { key: id++ }),
    ]);
  };

  useEffect(() => {
    window.addEventListener('openDialog', addDialog);
    return () => {
      window.removeEventListener('openDialog', addDialog);
    };
  }, [dialogs]);

  // useEffect(() => {
  //   window.addEventListener('openDialog', addDialog);
  // return () => {
  //   window.removeEventListener('openDialog', addDialog);
  // };
  // }, []);

  return <div id="dialogs">{dialogs}</div>;
};

interface DialogEvent extends Event {
  detail: {
    dialog: ReactElement;
  };
}

export const openDialog = (dialog: ReactNode) => {
  const dialogEvent = new CustomEvent('openDialog', {
    detail: {
      dialog,
    },
  });

  window.dispatchEvent(dialogEvent);
};
