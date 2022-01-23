import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDialog } from '../useDialog';

export const Toast: FC<{ message: string }> = ({ message }) => {
  const ref = useRef(null);
  const TOAST_PORTAL_DURATION = 3000;

  const { close, destroy, isVisible } = useDialog(ref);

  useEffect(() => {
    const closeToast: NodeJS.Timeout = setTimeout(() => {
      close();
    }, TOAST_PORTAL_DURATION);

    return () => {
      clearTimeout(closeToast);
    };
  }, []);

  return destroy ? null : (
    <ToastWrap ref={ref} show={isVisible}>
      {message}
    </ToastWrap>
  );
};

const ToastWrap = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);

  width: auto;

  animation: 0.5s forwards ${({ show }) => (show ? 'fadeIn' : 'fadeOut')};

  max-width: 270px;

  padding: 0.5rem 1rem;

  display: inline-block;

  margin: 0 auto;
  padding: 12px 18px 11px 18px;

  background-color: rgba(34, 34, 34, 0.8);

  border-radius: 10px;

  color: white;

  text-align: center;

  opacity: 0;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
