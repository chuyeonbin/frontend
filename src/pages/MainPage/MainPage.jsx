import React, { useState, useEffect } from 'react';
import JumboTron from './JumboTron/JumboTron';
import Posts from '../../components/Posts/Posts';
import * as S from './style';

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {});

  return (
    <>
      <JumboTron />
      <S.MainPage title="같이먹자">
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <S.Message>등록된 게시글이 없습니다!</S.Message>
        )}
      </S.MainPage>
    </>
  );
};

export default MainPage;
