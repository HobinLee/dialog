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

  useEffect(() => {
    console.log(dialogs);
  }, [dialogs]);

  const addDialog = (e: Event) => {
    const newDialog = cloneElement((e as DialogEvent).detail.content, {
      key: id++,
    });
    setDialogs([...dialogs, newDialog]);
  };

  useEffect(() => {
    window.addEventListener('openDialog', addDialog);
    return () => {
      window.removeEventListener('openDialog', addDialog);
    };
  }, [dialogs]);

  return <div id="dialogs">{dialogs}</div>;
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
