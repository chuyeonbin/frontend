import React from 'react';
import * as S from './style';

const CommentItem = () => {
  return (
    <S.CommentItem>
      <S.UserWrap>
        <S.UserImg />
        <S.UserInfo>
          <S.NickName>끼야아아알</S.NickName>
          <S.Address>경기도 군포시 산본동</S.Address>
        </S.UserInfo>
        <S.Date>2022-02-13 17시 15분</S.Date>
      </S.UserWrap>
      <S.CommentWrap>
        <S.Commnent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aLorem
        </S.Commnent>
        <S.Commnent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aLorem
        </S.Commnent>
      </S.CommentWrap>
    </S.CommentItem>
  );
};

export default CommentItem;
