import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.7rem 1.3rem;

  //props.color가 들어오면 red
  background-color: ${({ theme }) =>
    props => {
      return props.color === 'red' ? theme.color.red : theme.color.purple;
    }};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 22px;
`;
