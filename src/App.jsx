import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';

const App = () => {
  return (
    <>
      <GlobalStyleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>
        <Footer />
      </GlobalStyleProvider>
    </>
  );
};

export default App;
