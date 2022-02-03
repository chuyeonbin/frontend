import React from 'react';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginModal from './components/LoginModal/LoginModal';

const App = () => {
  return (
    <GlobalStyleProvider>
      <Header />
      <Footer />
      <LoginModal />
    </GlobalStyleProvider>
  );
};

export default App;
