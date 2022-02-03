import React from 'react';
import * as S from './style';

const Modal = ({ onClickModal }) => {
  return (
    <S.Wrap>
      <S.Modal>
        <S.Header>
          <S.Button>
            <S.Close />
          </S.Button>
        </S.Header>
        <S.Content>
          <S.Logo />
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
        </S.Content>
      </S.Modal>
    </S.Wrap>
  );
};

export default Modal;
