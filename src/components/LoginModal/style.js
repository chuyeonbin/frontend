import styled, { css } from 'styled-components';
import { Google, Facebook } from '@styled-icons/bootstrap';
import { Kakaotalk } from '@styled-icons/simple-icons';

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 300px;
`;

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

const Icon = css`
  position: absolute;
  left: 25px;
  top: 10px;
  width: 40px;
  height: 40px;
`;

export const KakaotalkIcon = styled(Kakaotalk)`
  ${Icon}
`;

export const FacebookIcon = styled(Facebook)`
  ${Icon}
`;

export const GoogleIcon = styled(Google)`
  ${Icon}
`;
