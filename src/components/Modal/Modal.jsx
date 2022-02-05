import React from 'react';
import * as S from './style';

const Modal = ({ children, closeModal }) => {
  const onClick = e => {
    if (!e.target.classList.contains('wrap')) return;
    closeModal();
  };
  return (
    <S.Wrap className="wrap" onClick={onClick}>
      <S.Modal>
        <S.Header>
          <S.Button onClick={closeModal}>
            <S.Close />
          </S.Button>
        </S.Header>
        <S.Content>
          <S.Logo />
          {children}
        </S.Content>
      </S.Modal>
    </S.Wrap>
  );
};

export default Modal;
