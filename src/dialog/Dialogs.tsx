import { cloneElement, FC, ReactElement, useEffect, useState } from 'react';
import { Alert } from './dialogs/Alert';
import { Confirm } from './dialogs/Confirm';

interface DialogEvent extends Event {
  detail: {
    dialog: ReactElement;
  };
}

let id = 0;

const dialogStore: ReactElement[] = [];

const EVENT_OPEN_DIALOG = 'openDialog';

export const Dialogs: FC = () => {
  const [dialogs, setDialogs] = useState<ReactElement[]>([]);

  const addDialog = (e: Event) => {
    dialogStore.push(
      cloneElement((e as DialogEvent).detail.dialog, {
        key: id++,
      }),
    );

    setDialogs([...dialogStore]);
  };

  useEffect(() => {
    window.addEventListener(EVENT_OPEN_DIALOG, addDialog);
    return () => window.removeEventListener(EVENT_OPEN_DIALOG, addDialog);
  }, []);

  return <>{dialogs}</>;
};

export const openDialog = (dialog: ReactElement) => {
  const dialogEvent = new CustomEvent(EVENT_OPEN_DIALOG, {
    detail: {
      dialog: <div>{dialog}</div>,
    },
  });

  window.dispatchEvent(dialogEvent);
};

export const confirm = async (message: string): Promise<boolean> => {
  return new Promise(resolved => {
    openDialog(
      <Confirm
        message={message}
        onConfirm={async () => {
          resolved(true);
        }}
        onCancel={async () => {
          resolved(false);
        }}
      />,
    );
  });
};

export const alert = async (message: string): Promise<void> => {
  return new Promise(resolved => {
    openDialog(
      <Alert
        message={message}
        onClose={async () => {
          resolved();
        }}
      />,
    );
  });
};

//confirm: (message: string, props?: DialogStoreConfirmProps & DialogOptions) => Promise<boolean>;
