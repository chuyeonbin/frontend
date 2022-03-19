import React, { useEffect, useState } from 'react';
import * as S from './style';
import postAPI from '../../api/post';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterPosts from './RegisterPosts/RegisterPosts';

const RegisterPage = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  const [registerPosts, setRegisterPosts] = useState([]);

  useEffect(() => {
    if (!user.profileSaveUser) {
      alert('로그인이 필요한 페이지 입니다.');
      navigate('/');
      return;
    }

    postAPI
      .uploadPost() //
      .then(res => {
        setRegisterPosts(res.data);
      });
  }, []);

  return (
    <S.RegisterPage title="등록한 게시글">
      {registerPosts.length > 0 ? (
        <RegisterPosts registerPosts={registerPosts} />
      ) : (
        <S.Message>등록한 게시글이 없습니다!</S.Message>
      )}
    </S.RegisterPage>
  );
};

export default RegisterPage;
