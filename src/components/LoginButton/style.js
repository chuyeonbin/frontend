import styled from 'styled-components';

export const LoginButton = styled.button`
  margin-top: 1.25rem;
  padding: 1.25rem;
  padding-left: 2.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 12px;
  color: ${props => props.color || 'black'};
`;
