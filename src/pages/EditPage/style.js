import styled from 'styled-components';
import CommonPage from '../../components/CommonPage/CommonPage';

export const EditPage = styled(CommonPage)``;

export const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 70%;
`;

export const H1 = styled.h1`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const TitleInput = styled.input.attrs({ placeholder: '제목...' })`
  margin: 1rem 0;
  padding: 0.8rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.regular};
  border: 2px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
`;

export const TextArea = styled.textarea`
  margin: 1rem 0;
  padding: 1.4rem;
  width: 100%;
  height: 400px;
  border: 2px solid ${({ theme }) => theme.color.grey};
  border-radius: 12px;
  resize: none;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
