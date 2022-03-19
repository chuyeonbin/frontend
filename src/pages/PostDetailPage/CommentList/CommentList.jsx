import React from 'react';
import * as S from './style';
import CommentItem from '../CommentItem/CommentItem';
import CommentUpload from '../CommentUpload/CommentUpload';

const CommentList = ({ addComment, comments }) => {
  return (
    <>
      <S.CommentCount>댓글: {comments.length}</S.CommentCount>
      <CommentUpload addComment={addComment} />
      <S.CommentList>
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </S.CommentList>
    </>
  );
};

export default CommentList;
