import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../../../store/modal';
import { setImage } from '../../../store/user';
import ImageUpload from '../../ImageUpload/ImageUpload';
import * as S from './style';

const ImageModal = () => {
  const defaultImageUrl = 'https://d3afymv2nzz1pw.cloudfront.net/doji.png';
  const user = useSelector(state => state.user.user);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const dispatch = useDispatch();

  const nextClick = () => {
    dispatch(setCount());
  };

  const handleFileChange = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      const base64 = reader.result;
      setImageUrl(base64);
      dispatch(setImage(e.target.files[0]));
    };
  };

  const handleDefaultImage = () => {
    setImageUrl(defaultImageUrl);
    dispatch(setImage(defaultImageUrl));
  };

  return (
    <S.ImageWrap>
      <S.Title>이미지를 선택해주세요!</S.Title>
      <S.SubTitle>선택 안할시 기본이미지로 선택됩니다.</S.SubTitle>
      <ImageUpload
        imageUrl={imageUrl}
        onFileChange={handleFileChange}
        onDefaultImage={handleDefaultImage}
      />
      <S.NextButton name={'다음'} onClick={nextClick}></S.NextButton>
    </S.ImageWrap>
  );
};

export default ImageModal;
