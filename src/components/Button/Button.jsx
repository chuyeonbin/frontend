import React from 'react';
import * as S from './style';

const Button = ({ className, onClick, name, color }) => {
  return (
    <S.Button onClick={onClick} color={color} className={className}>
      {name}
    </S.Button>
  );
};

export default Button;
