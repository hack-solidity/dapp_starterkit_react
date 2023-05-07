import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WalletButton from './components/WalletButton';
import Balance from './components/Balance';
import ContractInteraction from './components/ContractInteraction';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-screen px-6 ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-grow flex flex-col container mx-auto py-8 justify-content-center items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Hack Solidity Dapp Starter Kit</h1>
        <WalletButton isDarkMode={isDarkMode} />
        <Balance isDarkMode={isDarkMode} />
        <ContractInteraction isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
