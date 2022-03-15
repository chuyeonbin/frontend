import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import PostUploadPage from './pages/PostUploadPage/PostUploadPage';
import EditPage from './pages/EditPage/EditPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import OauthCallbackPage from './pages/OauthCallbackPage/OauthCallbackPage';

import { useSelector, useDispatch } from 'react-redux';
import auth from './api/auth';
import { setUser, resetUser } from './store/user';

const App = () => {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.profileSaveUser) {
      console.log('asdasdsa');
      return;
    }

    auth
      .getUser() //
      .then(res => {
        console.log('유저 정보 업데이트');
        dispatch(setUser(res.data));
      })
      .catch(() => {
        alert('세션이 만료 되었습니다.');
        dispatch(resetUser());
      });
  }, [navigate]);
  return (
    <>
      <GlobalStyleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post/upload" element={<PostUploadPage />} />
          <Route path="/post/edit" element={<EditPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/posts/register" element={<RegisterPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/oauth/*" element={<OauthCallbackPage />} />
        </Routes>
        <Footer />
      </GlobalStyleProvider>
    </>
  );
};

export default App;
