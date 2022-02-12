import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../api/index';
// import * as S from './style';

const OauthCallbackPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const url = window.location.href;
    const code = new URL(url).searchParams.get('code');

    if (!code) return;

    auth
      .getToken(code) //
      .then(res => {
        const token = res.data.token;
        console.log(token);
        navigate(-2);
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
