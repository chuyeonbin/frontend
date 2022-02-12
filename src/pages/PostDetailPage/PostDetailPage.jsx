import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import {
  faThumbsUp,
  faCommentDots,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

const PostDetailPage = () => {
  const id = useParams();

  return (
    <S.PostDetailPage>
      <S.PostWrap>
        <S.PostHeader>
          <S.Date>등록날짜: 2022-02-11</S.Date>
        </S.PostHeader>
        <S.PostInfo>
          <S.UploaderWrap>
            <S.UploaderImg />
            <S.UploaderInfo>
              <S.UploaderNickName>끼야아아알</S.UploaderNickName>
              <S.UploaderAddress>경기도 군포시 산본동</S.UploaderAddress>
            </S.UploaderInfo>
          </S.UploaderWrap>
          <S.Title>군포에서 밥 드실분 구합니다 연락주세요.</S.Title>
          <S.Content>
            안녕하세요 밥 같이 드실 사람들을 구하고 있어요 관심 있으신 분들은
            1:1채팅 부탁드립니다.
          </S.Content>
        </S.PostInfo>
        <S.PostFooter>
          <Button name="1:1 채팅하기" />
          <S.IconWrap>
            <S.IconList>
              <S.ThumbsUp icon={faThumbsUp} />
              <S.Count>{'22'}</S.Count>
            </S.IconList>
            <S.IconList>
              <S.Comment icon={faCommentDots} />
              <S.Count>{'6'}</S.Count>
            </S.IconList>
            <S.IconList>
              <S.View icon={faEye} />
              <S.Count>{'22'}</S.Count>
            </S.IconList>
          </S.IconWrap>
        </S.PostFooter>
      </S.PostWrap>
    </S.PostDetailPage>
  );
};

export default PostDetailPage;
