import React, { useEffect, useState } from 'react';
import * as S from './style';
import Posts from '../../components/Posts/Posts';
import postAPI from '../../api/post';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PostEditPage = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user.profileSaveUser) {
      alert('로그인이 필요한 페이지 입니다.');
      navigate('/');
      return;
    }

    postAPI
      .getPosts() //
      .then(res => {
        setPosts(res.data.content);
      });
  }, []);

  return (
    <S.PostEditPage title="등록한 게시글">
      {posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        <S.Message>등록한 게시글이 없습니다!</S.Message>
      )}
    </S.PostEditPage>
  );
};

export default PostEditPage;
