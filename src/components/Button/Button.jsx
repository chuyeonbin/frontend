import React from 'react';
import * as S from './style';

const Button = ({ className, onClick, name }) => {
  return <S.Button className={className}>{name}</S.Button>;
};

export default Button;
