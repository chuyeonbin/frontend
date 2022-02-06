import styled from 'styled-components';
import testImg from '../../../images/jumbotron/food2.jpeg';

export const JumboTron = styled.div`
  padding-top: 150px;
  position: relative;
  height: 500px;
  text-align: center;
  background: url(${testImg}) center/cover no-repeat;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
`;
