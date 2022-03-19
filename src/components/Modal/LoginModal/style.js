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
