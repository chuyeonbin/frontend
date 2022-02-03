import styled, { css } from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import { Google, Facebook } from '@styled-icons/bootstrap';
import { Kakaotalk } from '@styled-icons/simple-icons';
import favicon from '../../images/favicon.png';

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  min-height: 480px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Header = styled.header`
  text-align: right;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray};
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Close = styled(CloseOutline)`
  width: 40px;
  color: ${({ theme }) => theme.color.gray};
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: `${favicon}`,
  alt: '로고',
})`
  width: 120px;
`;

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
