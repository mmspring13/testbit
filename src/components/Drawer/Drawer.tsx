import {PropsWithChildren, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import CloseIcon from './../../assets/icons/close.svg?react';
import * as S from './Drawer.styled.ts';

export type DrawerProps = {
  title?: string | null;
  open: boolean;
  onClose(): void;
};

const Drawer = ({
  title,
  open,
  onClose,
  children
}: PropsWithChildren<DrawerProps>) => {
  const [isReady, setIsReady] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isReady) setIsReady(true)
  }, [isReady]);

  useEffect(() => {
    const handleEsc = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') handleClose()
    };
    window.addEventListener('keyup', handleEsc);
    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, []);

  useEffect(() => {
    setLocalOpen(open);
  }, [open]);

  useEffect(() => {
    let timer: number | null = null;
    if (localOpen) {
      componentRef.current?.classList.add('_opened');
      overlayRef.current?.classList.add('_opened');
      document.body.classList.add('lock-scroll')
    } else {
      componentRef.current?.classList.remove('_opened');
      overlayRef.current?.classList.remove('_opened');
      document.body.classList.remove('lock-scroll')
      timer = setTimeout(onClose, 200);
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [localOpen, onClose]);

  const handleClose = () => {
    setLocalOpen(false);
  };

  if (!open) {
    return null;
  }

  return createPortal(
    <>
      <S.Overlay ref={overlayRef} onClick={handleClose} />
      <S.Component ref={componentRef}>
        <S.Header>
          {title && <S.Title variant="body-xl-semibold">{title}</S.Title>}
          <S.CloseButton onClick={handleClose}>
            <CloseIcon />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          {children}
        </S.Content>
      </S.Component>
    </>,
    document.body
  )
};

export default Drawer;