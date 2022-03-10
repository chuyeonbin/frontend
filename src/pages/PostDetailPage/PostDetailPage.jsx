import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../../api/post';
import * as S from './style';
import {
  faThumbsUp,
  faCommentDots,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import CommentList from './CommentList/CommentList';

const PostDetailPage = () => {
  const [content, setContent] = useState({});
  const [comments, setComments] = useState([]);
  const id = useParams();

  const addComment = comment => {
    setComments([comment, ...comments]);
  };

  useEffect(() => {
    Promise.all([postAPI.getPost(), postAPI.getComments()]) //
      .then(res => {
        setContent(res[0].data);
        setComments(res[1].data.content);
      });
  }, []);

  return (
    <S.PostDetailPage>
      <S.PostWrap>
        <S.PostHeader>
          <S.Date>등록날짜: {content.createdAt}</S.Date>
        </S.PostHeader>
        <S.PostInfo>
          <S.UploaderWrap>
            <S.UploaderImg url={content.profileUrl} />
            <S.UploaderInfo>
              <S.UploaderNickName>{content.username}</S.UploaderNickName>
              <S.UploaderAddress>{content.address}</S.UploaderAddress>
            </S.UploaderInfo>
          </S.UploaderWrap>
          <S.Title>{content.title}</S.Title>
          <S.Content>{content.content}</S.Content>
        </S.PostInfo>
        <S.PostFooter>
          <Button name="1:1 채팅하기" />
          <S.IconWrap>
            <S.IconList>
              <S.ThumbsUp icon={faThumbsUp} />
              <S.Count>{content.likeCount}</S.Count>
            </S.IconList>
            <S.IconList>
              <S.Comment icon={faCommentDots} />
              <S.Count>{content.commentCount}</S.Count>
            </S.IconList>
            <S.IconList>
              <S.View icon={faEye} />
              <S.Count>{content.viewCount}</S.Count>
            </S.IconList>
          </S.IconWrap>
        </S.PostFooter>
        <CommentList addComment={addComment} comments={comments} />
      </S.PostWrap>
    </S.PostDetailPage>
  );
};

export default PostDetailPage;
