import styled from 'styled-components';
import { ArrowUpShort } from '@styled-icons/bootstrap';

export const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
`;

export const CopyRight = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ArrowUp = styled(ArrowUpShort)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-50%, 50%);
  width: 50px;
  cursor: pointer;
  transition: 200ms transform ease-in;
  &:hover {
    transform: translate(-50%, 50%) scale(1.3);
  }
`;
