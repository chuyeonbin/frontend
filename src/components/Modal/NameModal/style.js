import styled from 'styled-components';
import Button from '../../Button/Button';

export const NameWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const InputWrap = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const NameInput = styled.input`
  margin: 0 0.5rem;
  padding: 0.4rem;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: 200px;
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
