import styled from 'styled-components';
import logo from '../../images/logo.png';
import testImg from '../../images/doji.png';

export const Header = styled.header`
  padding: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c5c5c5;
`;

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuList = styled.li`
  margin-right: 1rem;
`;

export const MenuButton = styled.button`
  padding: 0.5rem;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #c5c5c5;
  background: none;
  border: none;
`;

export const Logo = styled.img.attrs({ src: `${logo}`, alt: '로고' })`
  width: 100px;
  height: 30px;
`;

export const LoginButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #c5c5c5;
  background: none;
`;

export const UserImage = styled.img.attrs({
  src: `${testImg}`,
  alt: '사용자이미지',
})`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #c5c5c5;
  background: none;
`;
