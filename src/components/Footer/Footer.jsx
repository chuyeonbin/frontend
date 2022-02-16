import React from 'react';
import * as S from './style';

const Footer = () => {
  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Footer>
      <S.CopyRight>© 2022 Team-식사Go</S.CopyRight>
      <S.ArrowUp onClick={onClick} />
    </S.Footer>
  );
};

export default Footer;
