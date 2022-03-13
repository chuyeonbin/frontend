import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import PostUploadPage from './pages/PostUploadPage/PostUploadPage';
import PostEditPage from './pages/PostEditPage/PostEditPage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import OauthCallbackPage from './pages/OauthCallbackPage/OauthCallbackPage';

const App = () => {
  return (
    <>
      <GlobalStyleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post/upload" element={<PostUploadPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/posts/edit" element={<PostEditPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/oauth/*" element={<OauthCallbackPage />} />
        </Routes>
        <Footer />
      </GlobalStyleProvider>
    </>
  );
};

export default App;
