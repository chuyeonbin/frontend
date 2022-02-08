import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import testImg from '../../../images/jumbotron/food2.jpeg';

export const JumboTron = styled.div`
  padding-top: 150px;
  position: relative;
  height: 500px;
  text-align: center;
  background: url(${testImg}) center/cover no-repeat;
  color: white;
`;

export const Content = styled.div``;

export const H1 = styled.h1`
  margin-bottom: 8rem;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const JumboTronButton = styled(Button)`
  & {
    padding: 1rem 2rem;
    border: 2px solid ${({ theme }) => theme.color.white};
  }
`;
