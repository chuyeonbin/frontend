import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const ProfileModal = ({ toggleProfile }) => {
  const navigate = useNavigate();

  const goToPage = url => navigate(url);

  const logOut = () => {};

  return (
    <S.ProfileModal toggle={toggleProfile}>
      <S.ProfileList>끼야아아알</S.ProfileList>
      <S.ProfileList onClick={() => goToPage('/profile')}>
        프로필 설정
      </S.ProfileList>
      <S.ProfileList>채팅</S.ProfileList>
      <S.ProfileList>로그아웃</S.ProfileList>
    </S.ProfileModal>
  );
};

export default ProfileModal;
