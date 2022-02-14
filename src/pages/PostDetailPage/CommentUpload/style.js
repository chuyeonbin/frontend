import styled from 'styled-components';
import Button from '../../../components/Button/Button';

export const CommentCount = styled.h2`
  margin-bottom: 1rem;
`;

export const CommentUpload = styled.form`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

export const CommentTextArea = styled.textarea.attrs({
  placeholder: '댓글을 입력하세요.',
})`
  flex-grow: 1;
  margin-right: 1rem;
  padding: 1rem;
  height: 100px;
  font-size: ${({ theme }) => theme.fontSize.small};
  resize: none;
`;

export const Submit = styled(Button).attrs({ type: 'submit' })`
  padding: 0.7rem 2rem;
`;
