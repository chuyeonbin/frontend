import React from 'react';
import * as S from './style';

const ImageModal = () => {
  return (
    <S.ImageWrap>
      <S.Title>이미지를 선택해주세요!</S.Title>
      <S.SubTitle>선택 안할시 기본이미지로 선택됩니다.</S.SubTitle>
      <S.ImageUpload>
        <S.UserImg src={''}></S.UserImg>
        <S.ButtonWrap>
          <S.ImgButton name="기본이미지" />
          <S.ImgButton name="이미지 선택" />
        </S.ButtonWrap>
      </S.ImageUpload>
      <S.NextButton name={'다음'}></S.NextButton>
    </S.ImageWrap>
  );
};

export default ImageModal;
