import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import * as S from './style';

const OauthCallbackPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const url = window.location.href;
    const code = new URL(url).searchParams.get('code');
    const backUrl = `backend api url/${code}`;

    if (!code) return;

    axios
      .get(backUrl, 'GET') //
      .then(response => {
        const token = response.data.token;
        navigate(-2);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, []);

  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

export default OauthCallbackPage;
