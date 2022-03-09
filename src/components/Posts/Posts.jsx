import React from 'react';
import Post from '../Post/Post';
import * as S from './style';

const PostList = ({ posts }) => {
  return (
    <S.PostList>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </S.PostList>
  );
};

export default PostList;
