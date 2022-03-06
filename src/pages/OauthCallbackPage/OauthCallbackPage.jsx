import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../api/auth';
// import * as S from './style';

const OauthCallbackPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const url = window.location.href;
    const code = new URL(url).searchParams.get('code');

    if (!code) return;

    auth
      .login(code) //
      .then(res => {
        navigate('/');
      })
      .catch(err => {
        throw new Error(err);
      });
  }, [navigate]);

  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

export default OauthCallbackPage;
