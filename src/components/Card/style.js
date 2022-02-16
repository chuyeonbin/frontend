import styled from 'styled-components';
import Button from '../Button/Button';
import testImg from '../../images/doji.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = styled.li`
  margin: 1rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.grey};
  border-radius: 22px;

  //양옆 마진 값 뺀 넓이
  @media screen and (min-width: 720px) {
    width: calc(50% - (1rem * 2));
  }

  @media screen and (min-width: 1200px) {
    width: calc(33.33333% - (1rem * 2));
  }
`;

export const Header = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.color.grey};
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};
`;

export const Content = styled.section`
  padding: 1rem;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

export const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContentInFo = styled.ul`
  display: flex;
  justify-content: flex-end;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const ContentItem = styled.li`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const ThumbsUp = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon,
}))`
  cursor: pointer;
  color: ${({ theme }) => theme.color.grey};
  &:hover {
    color: blue;
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
  margin-left: 5px;
`;

export const Footer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img.attrs({
  src: `${testImg}`,
  alt: '유저 이미지',
})`
  width: 65px;
  height: 65px;
  border: 1px solid grey;
  border-radius: 50%;
`;

export const UserInFo = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const NickName = styled.p`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.micro};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Address = styled.p`
  font-size: ${({ theme }) => theme.fontSize.microSmall};
  color: ${({ theme }) => theme.color.grey};
`;

export const ChatButton = styled(Button)`
  margin-left: auto;
  && {
    font-size: ${({ theme }) => theme.fontSize.microSmall};
  }
`;
