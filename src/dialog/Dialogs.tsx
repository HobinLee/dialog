import {
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Alert } from './dialogs/Alert';
import { Confirm } from './dialogs/Confirm';

interface DialogEvent extends Event {
  detail: {
    dialog: ReactElement;
  };
}

const EVENT_OPEN_DIALOG = 'openDialog';

export const Dialogs: FC = () => {
  const dialogList = useRef<ReactElement[]>([]).current;
  const [, setDialogNum] = useState(0);

  useEffect(() => {
    window.addEventListener(EVENT_OPEN_DIALOG, addDialog);
    return () => window.removeEventListener(EVENT_OPEN_DIALOG, addDialog);

    function addDialog(e: Event) {
      dialogList.push(
        cloneElement((e as DialogEvent).detail.dialog, {
          key: dialogList.length,
        }),
      );

      setDialogNum(dialogList.length);
    }
  }, []);

  return <>{dialogList}</>;
};

export const openDialog = (dialog: ReactElement) => {
  const dialogEvent = new CustomEvent('openDialog', {
    detail: {
      dialog: dialog,
    },
  });

  window.dispatchEvent(dialogEvent);
};

export const closeAll = () => {
  const dialogEvent = new CustomEvent('closeAllDialogs');

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
