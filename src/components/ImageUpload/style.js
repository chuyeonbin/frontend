import styled from 'styled-components';
import Button from '../Button/Button';

export const ImageUpload = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img.attrs(props => ({
  src: props.url || 'default.png',
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

export const ImageContainer = styled.div``;

export const ImgButton = styled(Button)`
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.microSmall};

  &:first-child {
    margin-bottom: 0.5rem;
  }
`;

export const ImgInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
  name: 'file',
})`
  display: none;
`;
