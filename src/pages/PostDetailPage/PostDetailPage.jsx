import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModal } from '../../store/modal';
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
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [content, setContent] = useState(null);
  const [comments, setComments] = useState([]);

  const timerRef = useRef(0);
  const { id } = useParams();

  const addComment = comment => {
    setComments([comment, ...comments]);
  };

  const toggleLike = () => {
    //좋아요 버튼 클릭시 유저가 없으면 모달창 띄우기
    if (!user.profileSaveUser) {
      dispatch(setShowModal(true));
      return;
    }

    const likeCount = content.liked
      ? content.likeCount - 1
      : content.likeCount + 1;
    setContent({ ...content, liked: !content.liked, likeCount });

    //좋아요 이벤트 디바운싱 처리
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(async () => {
      await postAPI.getLike(id, !content.liked);
    }, 1000);
  };

  useEffect(() => {
    if (!user.profileSaveUser) {
      alert('로그인이 필요한 페이지 입니다.');
      navigate('/');
      return;
    }

    Promise.all([postAPI.getPost(id), postAPI.getComments(id)]) //
      .then(res => {
        setContent(res[0].data);
        setComments(res[1].data.content);
      });
  }, []);

  return (
    <S.PostDetailPage>
      {content === null ? (
        <div>로딩중</div>
      ) : (
        <S.PostWrap>
          <S.PostHeader>
            <S.Date>등록날짜: {content.createdAt}</S.Date>
          </S.PostHeader>
          <S.PostInfo>
            <S.UploaderWrap>
              <S.UploaderImg url={content.profileUrl} />
              <S.UploaderInfo>
                <S.UploaderNickName>{content.username}</S.UploaderNickName>
                <S.UploaderAddress>
                  {`${content.address.city} ${content.address.street} ${content.address.zipcode}`}
                </S.UploaderAddress>
              </S.UploaderInfo>
            </S.UploaderWrap>
            <S.Title>{content.title}</S.Title>
            <S.Content>{content.content}</S.Content>
          </S.PostInfo>
          <S.PostFooter>
            <Button name="1:1 채팅하기" />
            <S.IconWrap>
              <S.IconList>
                <S.ThumbsUp
                  onClick={toggleLike}
                  liked={content.liked ? 'true' : 'false'}
                  icon={faThumbsUp}
                />
                <S.Count>{content.likeCount}</S.Count>
              </S.IconList>
              <S.IconList>
                <S.Comment icon={faCommentDots} />
                <S.Count>{comments.length}</S.Count>
              </S.IconList>
              <S.IconList>
                <S.View icon={faEye} />
                <S.Count>{content.viewCount}</S.Count>
              </S.IconList>
            </S.IconWrap>
          </S.PostFooter>
          <CommentList addComment={addComment} comments={comments} />
        </S.PostWrap>
      )}
    </S.PostDetailPage>
  );
};

export default PostDetailPage;
