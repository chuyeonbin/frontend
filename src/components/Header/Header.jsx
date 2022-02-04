import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import useModal from '../../hooks/useModal';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  const navigate = useNavigate();
  const [showModal, toggleModal] = useModal();
  const [isLogin, setLogin] = useState(false);
  const goToPage = url => navigate(url);

  return (
    <S.Header>
      <S.Logo onClick={() => goToPage('/')} />
      <S.MenuBar>
        <S.Menu>
          <S.MenuList>
            <S.MenuButton onClick={() => goToPage('/post/upload')}>
              게시글 등록
            </S.MenuButton>
          </S.MenuList>
          <S.MenuList>
            <S.MenuButton onClick={() => goToPage('/restaurant')}>
              BEST 맛집
            </S.MenuButton>
          </S.MenuList>
        </S.Menu>
        {isLogin === true ? (
          <S.UserImage />
        ) : (
          <S.LoginButton onClick={toggleModal}>로그인</S.LoginButton>
        )}
        {showModal && <LoginModal closeModal={toggleModal} />}
      </S.MenuBar>
    </S.Header>
  );
};

export default Header;
