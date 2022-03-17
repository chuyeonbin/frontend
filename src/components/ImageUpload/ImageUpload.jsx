import React, { useRef, useState } from 'react';
import * as S from './style';

const ImageUpload = ({ url, onFileChange }) => {
  const imgInputRef = useRef();

  const onButtonClick = () => {
    imgInputRef.current.click();
  };

  const onDefaultImage = () => {};

  return (
    <S.ImageUpload>
      <S.UserImg url={url} />
      <S.ButtonWrap>
        <S.ImgButton name="기본이미지로 변경" onClick={onDefaultImage} />
        <S.ImageContainer>
          <S.ImgButton onClick={onButtonClick} name="이미지 선택" />
          <S.ImgInput ref={imgInputRef} onChange={onFileChange} />
        </S.ImageContainer>
      </S.ButtonWrap>
    </S.ImageUpload>
  );
};

export default ImageUpload;
