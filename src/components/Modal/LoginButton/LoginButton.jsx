import React from 'react';
import * as S from './style';

const LoginButton = ({ children, provider, link }) => {
  const onClick = e => {
    window.location.href = e.currentTarget.dataset.link;
  };

  return (
    <S.LoginButton data-provider={provider} data-link={link} onClick={onClick}>
      {children}
    </S.LoginButton>
  );
};

export default LoginButton;
