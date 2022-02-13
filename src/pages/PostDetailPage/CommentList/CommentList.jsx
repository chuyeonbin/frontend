import React from 'react';
import * as S from './style';
import CommentItem from '../CommentItem/CommentItem';
import CommentUpload from '../CommentUpload/CommentUpload';

const CommentList = ({ commentList }) => {
  return (
    <>
      <CommentUpload />
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
