import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../store/user';
import { setCount, setShowModal } from '../../store/modal';
// import * as S from './style';

const OauthCallbackPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    const code = new URL(url).searchParams.get('code');

    if (!code) return;

    dispatch(fetchUser(code)).then(res => {
      const profileSaveUser = res.payload.profileSaveUser;

      if (!profileSaveUser) {
        //회원가입이 안되있으면
        dispatch(setShowModal(true));
        dispatch(setCount());
      }
      navigate('/');
    });
  }, [navigate]);

  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

export default OauthCallbackPage;
