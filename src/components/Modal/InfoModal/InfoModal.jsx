import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGender,
  setAddress,
  setEmail,
  setPhone,
  setImage,
  insertUser,
} from '../../../store/user';
import * as S from './style';

function InfoModal({ closeModal }) {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleGenderChange = e => {
    dispatch(setGender(e.target.id));
  };

  const handleCityChange = e => {
    dispatch(setAddress({ id: e.target.id, value: e.target.value }));
  };

  const handleStreetChange = e => {
    dispatch(setAddress({ id: e.target.id, value: e.target.value }));
  };

  const handleZipCodeChange = e => {
    dispatch(setAddress({ id: e.target.id, value: e.target.value }));
  };

  const handleEmailChange = e => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneChange = e => {
    dispatch(setPhone(e.target.value));
  };

  const signUp = () => {
    console.log(user);
    dispatch(insertUser(user)).then(res => {
      dispatch(setImage(res.payload.imageUrl));
    });
    closeModal();
  };

  useEffect(() => {
    dispatch(setGender('MAN'));
  }, []);

  return (
    <S.InfoWrap>
      <S.Title>정보를 입력해주세요!</S.Title>
      <S.InputWrap>
        <S.InputName>성별</S.InputName>
        <S.RadioWrap>
          <S.Radio
            value="남"
            name="gender"
            id="MAN"
            defaultChecked
            onChange={handleGenderChange}
          />
          <S.Label htmlFor="male">남</S.Label>
          <S.Radio
            value="여"
            name="gender"
            id="WOMAN"
            onChange={handleGenderChange}
          />
          <S.Label htmlFor="female">여</S.Label>
        </S.RadioWrap>
      </S.InputWrap>
      <S.InputWrap>
        <S.InputName>사는지역</S.InputName>
        <S.Address id="city" onChange={handleCityChange} />
        <S.Address id="street" onChange={handleStreetChange} />
        <S.Address id="zipcode" onChange={handleZipCodeChange} />
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
