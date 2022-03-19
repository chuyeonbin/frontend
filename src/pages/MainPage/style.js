// style.js
import styled from 'styled-components';
import CommonPage from '../../components/CommonPage/CommonPage';

export const MainPage = styled(CommonPage)``;

export const Message = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
