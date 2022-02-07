import styled from 'styled-components';

export const CommonPage = styled.section`
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 75rem;
  min-height: 700px;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;

export const Title = styled.h1`
  margin-bottom: 5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
