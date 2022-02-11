import React from 'react';
import * as S from './style';
import Modal from '../Modal/Modal';

const LoginModal = ({ closeModal }) => {
  const onClick = e => {
    window.location.href = e.target.dataset.link;
  };
  return (
    <Modal closeModal={closeModal}>
      <S.LoginWrap>
        <S.LoginButton
          data-provider="Kakao"
          data-link={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9719a3774e9f6f5c36f7e5da3a2b4005&redirect_uri=http://localhost:3000/oauth`}
          onClick={onClick}
        >
          <S.KakaotalkIcon color={'#FAF008'} />
          Kakao 로그인
        </S.LoginButton>
        <S.LoginButton data-provider="Facebook" color={'#4967AA'}>
          <S.FacebookIcon />
          Facebook 로그인
        </S.LoginButton>
        <S.LoginButton data-provider="Google" color={'red'}>
          <S.GoogleIcon />
          Google 로그인
        </S.LoginButton>
      </S.LoginWrap>
    </Modal>
  );
};

export default LoginModal;
