import React, { useState } from 'react';
import * as S from './style';

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <S.Header>
      <a href="/">
        <S.Logo />
      </a>
      <S.MenuBar>
        <S.Menu>
          <S.MenuList>
            <S.MenuButton>게시글 등록</S.MenuButton>
          </S.MenuList>
          <S.MenuList>
            <S.MenuButton>BEST 맛집</S.MenuButton>
          </S.MenuList>
        </S.Menu>
        {isLogin === true ? (
          <S.UserImage />
        ) : (
          <S.LoginButton>로그인</S.LoginButton>
        )}
      </S.MenuBar>
    </S.Header>
  );
};

export default Header;
