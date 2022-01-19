import {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

let id = 0;

const dialogs: ReactNode[] = [];
export const Dialogs: FC = () => {
  const [dialogList, setDialogList] = useState<ReactNode[]>([]);

  const addDialog = (e: Event) => {
    const newDialog = cloneElement((e as DialogEvent).detail.content, {
      key: id++,
    });
    dialogs.push(newDialog);

    setDialogList([...dialogList, newDialog]);
  };

  useEffect(() => {
    console.log(dialogList.length, dialogList.pop());
    window.addEventListener('openDialog', addDialog);
    return () => {
      window.removeEventListener('openDialog', addDialog);
    };
  }, [dialogList]);

  return <>{dialogList}</>;
};

interface DialogEvent extends Event {
  detail: {
    content: ReactElement;
  };
}

export const openDialog = (content: ReactNode) => {
  const dialogEvent = new CustomEvent('openDialog', {
    detail: {
      content,
    },
  });

  window.dispatchEvent(dialogEvent);
};
