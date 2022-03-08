import styled from 'styled-components';
import Button from '../../Button/Button';
import testImg from '../../../images/doji.png';

export const ImageWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const SubTitle = styled.h4`
  margin-top: 0.7rem;
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.fontSize.micro};
`;

export const ImageUpload = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img.attrs(props => ({
  src: props.src || testImg,
  alt: '유저 이미지',
}))`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
`;

export const ButtonWrap = styled.div`
  margin-left: 0.7rem;
  display: flex;
  flex-direction: column;
`;

export const ImgButton = styled(Button)`
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.microSmall};

  &:first-child {
    margin-bottom: 0.5rem;
  }
`;

export const NextButton = styled(Button)`
  & {
    padding: 0.7rem 3rem;
    border-radius: 10px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
