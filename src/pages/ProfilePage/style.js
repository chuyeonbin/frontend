import styled from 'styled-components';
import testImg from '../../images/doji.png';
import CommonPage from '../../components/CommonPage/CommonPage';
import Button from '../../components/Button/Button';

export const ProfilePage = styled(CommonPage)``;

export const ProfileWrap = styled.div`
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserForm = styled.form`
  margin-bottom: 3rem;
  padding: 0 1rem;
  width: 100%;
  min-width: 280px;
  max-width: 400px;
  text-align: right;
`;

export const ImageUpload = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const UserImg = styled.img.attrs({
  src: `${testImg}`,
  alt: '유저 이미지',
})`
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ImgButton = styled(Button)`
  margin-top: 1rem;
  border-radius: 8px;
`;

export const Div = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const H3 = styled.h3`
  text-align: left;
  flex-basis: 80px;
`;

export const Input = styled.input`
  padding: 0.6rem;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.regular};
  border: 1px solid grey;
  border-radius: 12px;
`;

export const Name = styled(Input).attrs({ type: 'text' })``;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 0.5rem;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: none;

  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 4px solid ${({ theme }) => theme.color.purple};
    border-radius: 100%;
    cursor: pointer;
  }

  &:checked {
    &:after {
      background-color: ${({ theme }) => theme.color.purple};
    }
  }
`;

export const Label = styled.label`
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Address = styled(Input).attrs({ type: 'text' })`
  margin-right: 0.3rem;
  width: 40px;
`;

export const Email = styled(Input).attrs({ type: 'email' })``;

export const Phone = styled(Input).attrs({ type: 'tel' })``;

export const DeleteButton = styled(Button)`
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.microSmall};
`;

export const ComplateButton = styled(Button)`
  padding: 0.7rem 3.3rem;
  border-radius: 8px;
`;
