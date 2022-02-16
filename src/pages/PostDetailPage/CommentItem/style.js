import styled from 'styled-components';
import testImg from '../../../images/doji.png';

export const CommentItem = styled.li`
  padding-bottom: 1rem;
  margin-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${({ theme }) => theme.color.grey};
`;

export const UserWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img.attrs({
  src: `${testImg}`,
  alt: '사용자이미지',
})`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.grey};
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
`;

export const UserInfo = styled.div`
  margin-left: 1rem;
`;

export const Date = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.color.grey};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const NickName = styled.p`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Address = styled.p`
  font-size: ${({ theme }) => theme.fontSize.micro};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.grey};
`;

export const CommentWrap = styled.div``;

export const Commnent = styled.p``;
