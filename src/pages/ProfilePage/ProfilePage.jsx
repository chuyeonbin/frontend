import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth from '../../api/auth';
import { insertUser, resetUser, setImage } from '../../store/user';
import ImageUpload from '../../components/ImageUpload/ImageUpload';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const [file, setFile] = useState(user.imageUrl);

  const nickNameRef = useRef('');
  const [gender, setGender] = useState(user.gender);
  const cityRef = useRef('');
  const streetRef = useRef('');
  const zipcodeRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  const handleGenderChange = e => setGender(e.target.id);

  const onProfileModify = () => {
    const modifyUser = {
      id: user.id,
      address: {
        city: cityRef.current.value,
        street: streetRef.current.value,
        zipcode: zipcodeRef.current.value,
      },
      email: emailRef.current.value,
      gender: gender,
      imageUrl: file,
      nickName: nickNameRef.current.value,
      phoneNumber: phoneRef.current.value,
    };

    dispatch(insertUser(modifyUser)).then(res => {
      alert('수정이 완료 되었습니다.');
      dispatch(setImage(res.payload.imageUrl));
      navigate('/');
    });
  };

  const onDeleteUser = e => {
    e.preventDefault();
    auth
      .deleteUser() //
      .then(res => {
        alert('탈퇴가 완료 되었습니다.');
        dispatch(resetUser());
        navigate('/');
      });
  };

  const handleFileChange = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);

    reader.onloadend = () => {
      const base64 = reader.result;
      setImageUrl(base64);
    };
  };

  const handleDefaultImage = () => {
    setImageUrl('https://d3afymv2nzz1pw.cloudfront.net/doji.png');
    setFile('https://d3afymv2nzz1pw.cloudfront.net/doji.png');
  };

  useEffect(() => {
    if (!user.profileSaveUser) {
      alert('로그인이 필요한 페이지 입니다.');
      navigate('/');
      return;
    }
  }, [navigate, user.profileSaveUser]);

  return (
    <S.ProfilePage title="프로필 수정">
      <S.ProfileWrap>
        <S.UserDiv>
          <ImageUpload
            imageUrl={imageUrl}
            onFileChange={handleFileChange}
            onDefaultImage={handleDefaultImage}
          />
          <S.Div>
            <S.H3>닉네임</S.H3>
            <S.Name defaultValue={user.nickName || ''} ref={nickNameRef} />
          </S.Div>
          <S.Div>
            <S.H3>성별</S.H3>
            <S.RadioWrap>
              <S.Radio
                value="남"
                name="gender"
                id="MAN"
                checked={gender === 'MAN'}
                onChange={handleGenderChange}
              />
              <S.Label htmlFor="MAN">남</S.Label>
              <S.Radio
                value="여"
                name="gender"
                id="WOMAN"
                checked={gender === 'WOMAN'}
                onChange={handleGenderChange}
              />
              <S.Label htmlFor="WOMAN">여</S.Label>
            </S.RadioWrap>
          </S.Div>
          <S.Div>
            <S.H3>사는지역</S.H3>
            <S.Address
              defaultValue={`${user.address.city}` || ''}
              ref={cityRef}
            />
            <S.Address
              defaultValue={`${user.address.street}` || ''}
              ref={streetRef}
            />
            <S.Address
              defaultValue={`${user.address.zipcode}` || ''}
              ref={zipcodeRef}
            />
          </S.Div>
          <S.Div>
            <S.H3>이메일</S.H3>
            <S.Email defaultValue={user.email || ''} ref={emailRef} />
          </S.Div>
          <S.Div>
            <S.H3>핸드폰</S.H3>
            <S.Phone defaultValue={user.phoneNumber || ''} ref={phoneRef} />
          </S.Div>
          <S.DeleteButton name="회원탈퇴" color="red" onClick={onDeleteUser} />
        </S.UserDiv>
        <S.ComplateButton name="프로필 수정" onClick={onProfileModify} />
      </S.ProfileWrap>
    </S.ProfilePage>
  );
};

export default ProfilePage;
