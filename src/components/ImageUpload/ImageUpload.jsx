import React, { useRef } from 'react';
import * as S from './style';

const ImageUpload = ({ imageUrl, onFileChange, onDefaultImage }) => {
  const imgInputRef = useRef(null);

  const onButtonClick = () => {
    imgInputRef.current.click();
  };

  const onDefaultImageClick = () => onDefaultImage();

  return (
    <S.ImageUpload>
      <S.UserImg url={imageUrl} />
      <S.ButtonWrap>
        <S.ImgButton name="기본이미지로 변경" onClick={onDefaultImageClick} />
        <S.ImageContainer>
          <S.ImgButton onClick={onButtonClick} name="이미지 선택" />
          <S.ImgInput ref={imgInputRef} onChange={onFileChange} />
        </S.ImageContainer>
      </S.ButtonWrap>
    </S.ImageUpload>
  );
};

export default ImageUpload;
