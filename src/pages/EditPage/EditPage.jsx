import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import postAPI from '../../api/post';
import Button from '../../components/Button/Button';

function EditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(state => state.user.user);

  const titleRef = useRef('');
  const contentRef = useRef('');

  useEffect(() => {
    if (!user.profileSaveUser || location.state.postId === null) {
      alert('접근 권한이 없습니다.');
      navigate('/');
      return;
    }
  });

  const onModify = e => {
    postAPI
      .editPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
      })
      .then(res => {
        alert('글 수정이 완료 됐습니다.');
        navigate('/');
      });
    e.preventDefault();
  };

  const onCancel = e => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <S.EditPage title="게시글 수정">
      <S.Form>
        <S.H1>제목을 작성해주세요.</S.H1>
        <S.TitleInput ref={titleRef} defaultValue={location.state.title} />
        <S.H1>내용을 작성해주세요.</S.H1>
        <S.TextArea ref={contentRef} defaultValue={location.state.content} />
        <S.InputWrap>
          <Button type="submit" name={'게시글 수정'} onClick={onModify} />
          <Button color="red" name={'취소'} onClick={onCancel} />
        </S.InputWrap>
      </S.Form>
    </S.EditPage>
  );
}

export default EditPage;
