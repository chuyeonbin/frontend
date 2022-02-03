import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import PostUploadPage from './pages/PostUploadPage/PostUploadPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';

const App = () => {
  return (
    <>
      <GlobalStyleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/upload" element={<PostUploadPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </GlobalStyleProvider>
    </>
  );
};

export default App;
