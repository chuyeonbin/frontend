import styled from 'styled-components';

export const CommonPage = styled.section`
  margin: 0 auto;
  padding-top: 8rem;
  max-width: 75rem;
  min-height: 700px;
`;

export const Title = styled.h1`
  margin-bottom: 5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
