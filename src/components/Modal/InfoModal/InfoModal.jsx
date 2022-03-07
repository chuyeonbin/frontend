import React from 'react';
import * as S from './style';

function InfoModal() {
  return (
    <S.InfoWrap>
      <S.Title>정보를 입력해주세요!</S.Title>
      <S.InputWrap>
        <S.InputName>성별</S.InputName>
        <S.RadioWrap>
          <S.Radio value="남" name="gender" id="male" checked readOnly />
          <S.Label htmlFor="male">남</S.Label>
          <S.Radio value="여" name="gender" id="female" />
          <S.Label htmlFor="female">여</S.Label>
        </S.RadioWrap>
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>사는지역</S.InputName>
        <S.Address />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>이메일</S.InputName>
        <S.Email />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>핸드폰</S.InputName>
        <S.Phone />
      </S.InputWrap>
      <S.SignButton name="가입완료" />
    </S.InfoWrap>
  );
}

export default InfoModal;
