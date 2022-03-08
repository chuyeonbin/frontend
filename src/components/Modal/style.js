import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline';
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
  z-index: 1000;
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
  width: 90px;
`;
