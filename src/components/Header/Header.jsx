import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import ProfileModal from './ProfileModal/ProfileModal';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const [showModal, toggleModal] = useModal();
  const [toggleProfile, setToggleProfile] = useState(false);
  const user = useSelector(state => state.user.user);
  const goToPage = url => navigate(url);

  const onToggleProfile = () => {
    setToggleProfile(!toggleProfile);
  };

  return (
    <S.Header>
      <S.Logo onClick={() => goToPage('/')} />
      <S.MenuBar>
        <S.Menu>
          <S.MenuList>
            <S.MenuButton onClick={() => goToPage('/restaurant')}>
              BEST 맛집
            </S.MenuButton>
          </S.MenuList>
          {user.profileSaveUser ? (
            <>
              <S.MenuList>
                <S.MenuButton onClick={() => goToPage('/post/upload')}>
                  게시글 등록
                </S.MenuButton>
              </S.MenuList>
              <S.MenuList>
                <S.MenuButton onClick={() => goToPage('/posts/register')}>
                  등록한 게시글
                </S.MenuButton>
              </S.MenuList>
            </>
          ) : (
            <></>
          )}
        </S.Menu>
        {user.profileSaveUser ? (
          <S.Profile>
            <S.ProfileImage url={user.imageUrl} onClick={onToggleProfile} />
            <ProfileModal toggleProfile={toggleProfile} />
          </S.Profile>
        ) : (
          <S.LoginButton onClick={toggleModal}>로그인</S.LoginButton>
        )}
        {showModal && <Modal closeModal={toggleModal} />}
      </S.MenuBar>
    </S.Header>
  );
};

export default Header;
