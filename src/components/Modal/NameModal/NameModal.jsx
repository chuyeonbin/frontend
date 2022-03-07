import React from 'react';
import { useDispatch } from 'react-redux';
import { setCount } from '../../../store/modal';
import * as S from './style';

const NameModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCount());
  };
  return (
    <S.NameWrap>
      <S.Title>반갑습니다!🎉</S.Title>
      <S.Title>닉네임을 정해주세요!</S.Title>
      <S.InputWrap>
        <S.Span>반가워요.</S.Span>
        <S.NameInput />
        <S.Span>님🎉</S.Span>
      </S.InputWrap>
      <S.NextButton name={'다음'} onClick={handleClick} />
    </S.NameWrap>
  );
};

export default NameModal;
