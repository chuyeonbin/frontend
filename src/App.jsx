import React from 'react';
import GlobalStyleProvider from './styles/GlobalStyleProvider';
import Header from './components/Header/Header';

const App = () => {
  return (
    <GlobalStyleProvider>
      <Header />
    </GlobalStyleProvider>
  );
};

export default App;
