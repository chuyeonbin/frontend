import React from 'react';
import * as S from './style';

const ProfilePage = () => {
  return (
    <S.ProfilePage title="프로필 수정">
      <S.ProfileWrap>
        <S.UserForm>
          <S.ImageUpload>
            <S.UserImg />
            <S.ButtonWrap>
              <S.ImgButton name="기본이미지" />
              <S.ImgButton name="이미지 선택" />
            </S.ButtonWrap>
          </S.ImageUpload>
          <S.Div>
            <S.H3>닉네임</S.H3>
            <S.Name />
          </S.Div>
          <S.Div>
            <S.H3>성별</S.H3>
            <S.RadioWrap>
              <S.Radio value="남" name="jender" id="male" checked />
              <S.Label for="male">남</S.Label>
              <S.Radio value="여" name="jender" id="female" />
              <S.Label for="female">여</S.Label>
            </S.RadioWrap>
          </S.Div>
          <S.Div>
            <S.H3>사는지역</S.H3>
            <S.Address />
          </S.Div>
          <S.Div>
            <S.H3>이메일</S.H3>
            <S.Email />
          </S.Div>
          <S.Div>
            <S.H3>핸드폰</S.H3>
            <S.Phone />
          </S.Div>
          <S.DeleteButton name="회원탈퇴" color="red" />
        </S.UserForm>
        <S.ComplateButton name="완료" />
      </S.ProfileWrap>
    </S.ProfilePage>
  );
};

export default ProfilePage;
