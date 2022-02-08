import React from 'react';
import Button from '../../components/Button/Button';
import * as S from './style';

const PostUploadPage = () => {
  return (
    <S.PostUploadPage title="게시글 등록">
      <S.Form>
        <S.H1>제목을 작성해주세요.</S.H1>
        <S.TitleInput />
        <S.H1>내용을 작성해주세요.</S.H1>
        <S.TextArea />
        <S.InputWrap>
          <Button type="submit" name={'게시글 등록'} />
          <Button name={'취소'} />
        </S.InputWrap>
      </S.Form>
    </S.PostUploadPage>
  );
};

export default PostUploadPage;
