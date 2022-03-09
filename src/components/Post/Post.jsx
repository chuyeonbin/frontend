import React from 'react';
import * as S from './style';
import {
  faThumbsUp,
  faCommentDots,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
  const { date, title, address, nickName, thumbsUp, comment, view, userImg } =
    post;

  return (
    <S.Post>
      <S.Header>등록날짜: {date}</S.Header>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.ContentInFo>
          <S.ContentItem>
            <S.ThumbsUp icon={faThumbsUp} />
            <S.Count>{thumbsUp}</S.Count>
          </S.ContentItem>
          <S.ContentItem>
            <S.Comment icon={faCommentDots} />
            <S.Count>{comment}</S.Count>
          </S.ContentItem>
          <S.ContentItem>
            <S.View icon={faEye} />
            <S.Count>{view}</S.Count>
          </S.ContentItem>
        </S.ContentInFo>
      </S.Content>
      <S.Footer>
        <S.UserImg />
        <S.UserInFo>
          <S.NickName>{nickName}</S.NickName>
          <S.Address>{address}</S.Address>
        </S.UserInFo>
        <S.ChatButton name={'1:1 채팅하기'} />
      </S.Footer>
    </S.Post>
  );
};

export default Post;
