import React from 'react';
import * as S from './style';
import CommentItem from '../CommentItem/CommentItem';

const CommentList = ({ commentList }) => {
  return (
    <>
      <S.CommentCount>댓글: 6</S.CommentCount>
      <S.CommentList>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </S.CommentList>
    </>
  );
};

export default CommentList;
