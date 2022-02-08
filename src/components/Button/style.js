import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.7rem 1.3rem;
  background-color: ${({ theme }) => theme.color.purple};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 22px;
`;
