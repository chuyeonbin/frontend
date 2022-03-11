import styled from 'styled-components';
import CommonPage from '../../components/CommonPage/CommonPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostDetailPage = styled(CommonPage)``;

export const PostWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 6rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostHeader = styled.header`
  margin-bottom: 1rem;
  text-align: right;
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.fontSize.regular};
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};
`;

export const Date = styled.h3`
  padding-bottom: 1rem;
`;

export const PostInfo = styled.section`
  margin-bottom: 8rem;
`;

export const UploaderWrap = styled.div`
  margin-bottom: 7rem;
  display: flex;
  align-items: center;
`;

export const UploaderInfo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

export const UploaderImg = styled.img.attrs(props => ({
  src: props.url,
  alt: '유저 이미지',
}))`
  width: 75px;
  height: 75px;
  border: 1px solid grey;
  border-radius: 50%;
`;

export const UploaderNickName = styled.p`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const UploaderAddress = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.grey};
`;

export const Title = styled.p`
  margin-bottom: 5rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const PostFooter = styled.footer`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};
`;

export const IconWrap = styled.ul`
  display: flex;
  font-size: 24px;
`;

export const IconList = styled.li`
  margin-left: 1rem;
`;

export const ThumbsUp = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon,
}))`
  cursor: pointer;
  color: ${props => {
    console.log(props.liked);
    return props.liked === 'true'
      ? ({ theme }) => theme.color.purple
      : ({ theme }) => theme.color.grey;
  }};

  &:hover {
    color: ${({ theme }) => theme.color.purple};
  }
`;

export const Comment = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon,
}))`
  color: ${({ theme }) => theme.color.black};
`;

export const View = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon,
}))``;

export const Count = styled.span`
  margin-left: 0.5rem;
`;
