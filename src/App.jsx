import React from 'react';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <GlobalStyleProvider>
      <Header />
      <Footer />
    </GlobalStyleProvider>
  );
};

export default App;
