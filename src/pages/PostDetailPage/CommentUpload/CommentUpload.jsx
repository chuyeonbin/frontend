import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setShowModal } from '../../../store/modal';
import postAPI from '../../../api/post';
import * as S from './style';

const CommentUpload = () => {
  const textRef = useRef(null);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const { id } = useParams();

  const handleChange = e => {
    const text = e.target.value;
    setContent(text);
  };

  const uploadComments = e => {
    e.preventDefault();

    if (!user.profileSaveUser) {
      dispatch(setShowModal(true));
    }
    postAPI.uplaodComments(id, content);
    textRef.current.value = '';
  };

  return (
    <>
      <S.CommentUpload>
        <S.CommentTextArea ref={textRef} onChange={handleChange} />
        <S.Submit name="등록" onClick={uploadComments} />
      </S.CommentUpload>
    </>
  );
};

export default CommentUpload;
