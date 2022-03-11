import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setShowModal } from '../../../store/modal';
import postAPI from '../../../api/post';
import * as S from './style';

const CommentUpload = ({ addComment }) => {
  const textRef = useRef(null);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const uploadComments = e => {
    e.preventDefault();

    if (textRef.current.value === '') {
      alert('댓글을 입력해주세요.');
      return;
    }

    if (!user.profileSaveUser) {
      dispatch(setShowModal(true));
      return;
    }

    const comment = {
      content: textRef.current.value,
      address: user.address,
      username: user.name,
      profileUrl: user.imageUrl,
      createdAt: Date(),
    };
    addComment(comment);
    postAPI.uploadComments(id, comment);
    textRef.current.value = '';
  };

  return (
    <>
      <S.CommentUpload>
        <S.CommentTextArea ref={textRef} />
        <S.Submit name="등록" onClick={uploadComments} />
      </S.CommentUpload>
    </>
  );
};

export default CommentUpload;
