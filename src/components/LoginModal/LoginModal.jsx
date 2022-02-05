import React from 'react';
import * as S from './style';
import Modal from '../Modal/Modal';

const LoginModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <S.LoginWrap>
        <S.LoginButton>
          <S.KakaotalkIcon color={'#FAF008'} />
          Kakao 로그인
        </S.LoginButton>
        <S.LoginButton color={'#4967AA'}>
          <S.FacebookIcon />
          Facebook 로그인
        </S.LoginButton>
        <S.LoginButton color={'red'}>
          <S.GoogleIcon />
          Google 로그인
        </S.LoginButton>
      </S.LoginWrap>
    </Modal>
  );
};

export default LoginModal;
