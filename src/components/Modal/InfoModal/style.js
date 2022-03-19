import styled from 'styled-components';
import Button from '../../Button/Button';

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 1.25rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const InputWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const InputName = styled.h3`
  margin-right: 0.4rem;
  flex-basis: 60px;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Input = styled.input`
  padding: 0.6rem;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid grey;
  border-radius: 8px;
`;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 0.5rem;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: none;

  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 4px solid ${({ theme }) => theme.color.purple};
    border-radius: 100%;
    cursor: pointer;
  }

  &:checked {
    &:after {
      background-color: ${({ theme }) => theme.color.purple};
    }
  }
`;

export const Label = styled.label`
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

// export const InputWrap = styled.div`
//   margin-bottom: 1rem;
//   display: flex;
//   align-items: center;
// `;

export const AddressWrap = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Address = styled.input.attrs({ type: 'text' })`
  margin-right: 0.3rem;
  width: 70px;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid grey;
`;

export const Email = styled(Input).attrs({ type: 'email' })``;

export const Phone = styled(Input).attrs({ type: 'tel' })``;

export const SignButton = styled(Button)`
  align-self: center;
  border-radius: 8px;
  &:hover {
    transform: scale(1.05);
  }
`;
