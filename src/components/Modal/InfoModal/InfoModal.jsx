import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGender,
  setAddress,
  setEmail,
  setPhone,
  insertUser,
} from '../../../store/user';
import * as S from './style';

function InfoModal({ closeModal }) {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleGenderChange = e => {
    dispatch(setGender(e.target.id));
  };

  const handleAddressChange = e => {
    dispatch(setAddress(e.target.value));
  };

  const handleEmailChange = e => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneChange = e => {
    dispatch(setPhone(e.target.value));
  };

  const signUp = () => {
    dispatch(insertUser(user));
    closeModal();
  };

  return (
    <S.InfoWrap>
      <S.Title>정보를 입력해주세요!</S.Title>
      <S.InputWrap>
        <S.InputName>성별</S.InputName>
        <S.RadioWrap>
          <S.Radio
            value="남"
            name="gender"
            id="male"
            checked={user.gender === 'male'}
            onChange={handleGenderChange}
          />
          <S.Label htmlFor="male">남</S.Label>
          <S.Radio
            value="여"
            name="gender"
            id="female"
            checked={user.gender === 'female'}
            onChange={handleGenderChange}
          />
          <S.Label htmlFor="female">여</S.Label>
        </S.RadioWrap>
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>사는지역</S.InputName>
        <S.Address onChange={handleAddressChange} />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>이메일</S.InputName>
        <S.Email value={user.email} onChange={handleEmailChange} />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>핸드폰</S.InputName>
        <S.Phone onChange={handlePhoneChange} />
      </S.InputWrap>
      <S.SignButton name="가입완료" onClick={signUp} />
    </S.InfoWrap>
  );
}

export default InfoModal;
