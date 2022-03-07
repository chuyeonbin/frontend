import React from 'react';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal/LoginModal';
import NameModal from './NameModal/NameModal';
import ImageModal from './ImageModal/ImageModal';
import InfoModal from './InfoModal/InfoModal';

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
            const IMAGE = 2;
            const INFO = 3;
            switch (count) {
              case LOGIN:
                return <LoginModal />;
              case NAME:
                return <NameModal />;
              case IMAGE:
                return <ImageModal />;
              case INFO:
                return <InfoModal />;
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
