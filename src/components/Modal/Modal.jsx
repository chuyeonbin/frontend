import React from 'react';
import * as S from './style';

const Modal = ({ children, closeModal }) => {
  return (
    <S.Wrap onClick={closeModal}>
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
