import React from 'react';
import * as S from './style';
import Modal from '../Modal/Modal';
import LoginButton from '../LoginButton/LoginButton';

const LoginModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <S.LoginWrap>
        <LoginButton
          provider="Kakao"
          link={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9719a3774e9f6f5c36f7e5da3a2b4005&redirect_uri=https://sicksago.herokuapp.com/oauth/kakao`}
        >
          <S.KakaotalkIcon />
          Kakao 로그인
        </LoginButton>
        <LoginButton provider="Facebook">
          <S.FacebookIcon />
          Facebook 로그인
        </LoginButton>
        <LoginButton provider="Google">
          <S.GoogleIcon />
          Google 로그인
        </LoginButton>
      </S.LoginWrap>
    </Modal>
  );
};

export default LoginModal;
