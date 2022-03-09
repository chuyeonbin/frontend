import React from 'react';
import * as S from './style';

const CommentUpload = () => {
  return (
    <>
      <S.CommentUpload>
        <S.CommentTextArea />
        <S.Submit name="등록" />
      </S.CommentUpload>
    </>
  );
};

export default CommentUpload;
