import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '../../../store/modal';
import * as S from './style';

const ImageModal = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCount());
  };

  return (
    <S.ImageWrap>
      <S.Title>이미지를 선택해주세요!</S.Title>
      <S.SubTitle>선택 안할시 기본이미지로 선택됩니다.</S.SubTitle>
      <S.ImageUpload>
        <S.UserImg url={user.imageUrl}></S.UserImg>
        <S.ButtonWrap>
          <S.ImgButton name="기본이미지" />
          <S.ImgButton name="이미지 선택" />
        </S.ButtonWrap>
      </S.ImageUpload>
      <S.NextButton name={'다음'} onClick={handleClick}></S.NextButton>
    </S.ImageWrap>
  );
};

export default ImageModal;
