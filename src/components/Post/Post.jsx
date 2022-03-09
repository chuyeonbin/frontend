import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import {
  faThumbsUp,
  faCommentDots,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
  const {
    createdAt,
    title,
    address,
    username,
    likeCount,
    commentCount,
    viewCount,
    profileUrl,
    postId,
  } = post;

  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`posts/${postId}`);
  };

  return (
    <S.Post>
      <S.Header>등록날짜: {createdAt}</S.Header>
      <S.Content>
        <S.Title onClick={goToPage}>{title}</S.Title>
        <S.ContentInFo>
          <S.ContentItem>
            <S.ThumbsUp icon={faThumbsUp} />
            <S.Count>{likeCount}</S.Count>
          </S.ContentItem>
          <S.ContentItem>
            <S.Comment icon={faCommentDots} />
            <S.Count>{commentCount}</S.Count>
          </S.ContentItem>
          <S.ContentItem>
            <S.View icon={faEye} />
            <S.Count>{viewCount}</S.Count>
          </S.ContentItem>
        </S.ContentInFo>
      </S.Content>
      <S.Footer>
        <S.UserImg img={profileUrl} />
        <S.UserInFo>
          <S.NickName>{username}</S.NickName>
          <S.Address>{address}</S.Address>
        </S.UserInFo>
        <S.ChatButton name={'1:1 채팅하기'} />
      </S.Footer>
    </S.Post>
  );
};

export default Post;
