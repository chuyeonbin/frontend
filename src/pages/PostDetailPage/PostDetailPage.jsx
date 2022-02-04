import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';

const PostDetailPage = () => {
  const id = useParams();
  return (
    <S.PostDetailPage>
      <h1>게시글 상세 페이지 {id.id}</h1>
    </S.PostDetailPage>
  );
};

export default PostDetailPage;
