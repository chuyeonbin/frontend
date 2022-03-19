import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postAPI from '../../api/post';
import Button from '../../components/Button/Button';
import * as S from './style';

const PostUploadPage = () => {
  const user = useSelector(state => state.user.user);
  const titleRef = useRef('');
  const contentRef = useRef('');
  const navigate = useNavigate();

  const onSumbit = e => {
    e.preventDefault();
    postAPI.uploadPost({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
    navigate('/');
  };

  const onCancel = e => {
    e.preventDefault();
    navigate('/');
  };

  useEffect(() => {
    if (!user.profileSaveUser) {
      alert('로그인을 해주세요.');
      navigate('/');
    }
  }, [navigate, user.profileSaveUser]);

  return (
    <S.PostUploadPage title="게시글 등록">
      <S.Form>
        <S.H1>제목을 작성해주세요.</S.H1>
        <S.TitleInput ref={titleRef} />
        <S.H1>내용을 작성해주세요.</S.H1>
        <S.TextArea ref={contentRef} />
        <S.InputWrap>
          <Button type="submit" name={'게시글 등록'} onClick={onSumbit} />
          <Button color="red" name={'취소'} onClick={onCancel} />
        </S.InputWrap>
      </S.Form>
    </S.PostUploadPage>
  );
};

export default PostUploadPage;
