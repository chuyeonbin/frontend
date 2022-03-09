import React from 'react';
import Post from '../Post/Post';
import * as S from './style';

const PostList = ({ posts }) => {
  return (
    <S.PostList>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </S.PostList>
  );
};

export default PostList;
