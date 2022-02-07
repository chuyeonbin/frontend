import React from 'react';
import * as S from './style';

const CommonPage = ({ children, title }) => {
  return (
    <S.CommonPage>
      {/* {title && <S.Title>{title}</S.Title>} */}
      {children}
    </S.CommonPage>
  );
};

export default CommonPage;
