import React from 'react';
import * as S from './style';

const JumboTron = () => {
  return (
    <S.JumboTron>
      <S.Content>
        <S.H1>맛집이 궁금하신가요?</S.H1>
        <S.JumboTronButton name={'맛집 보러 가기'} />
      </S.Content>
    </S.JumboTron>
  );
};

export default JumboTron;
