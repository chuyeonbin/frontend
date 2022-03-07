import React from 'react';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal/LoginModal';
import NameModal from './NameModal/NameModal';

import * as S from './style';

const Modal = ({ closeModal }) => {
  const count = useSelector(state => state.modal.count);

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
          {(() => {
            const LOGIN = 0;
            const NAME = 1;
            const INFO = 2;
            switch (count) {
              case LOGIN:
                return <LoginModal />;
              case NAME:
                return <NameModal />;
              // case INFO:
              //   return <InfoModal />;
              default:
                <div></div>;
            }
          })()}
        </S.Content>
      </S.Modal>
    </S.Wrap>
  );
};

export default Modal;
