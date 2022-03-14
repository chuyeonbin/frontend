import React from 'react';
import * as S from './style';
import RegisterPost from '../RegisterPost/RegisterPost';

const RegisterPosts = ({ registerPosts }) => {
  return (
    <S.RegisterPosts>
      {registerPosts.map(registerPost => (
        <RegisterPost key={registerPost.postId} registerPost={registerPost} />
      ))}
    </S.RegisterPosts>
  );
};

export default RegisterPosts;
