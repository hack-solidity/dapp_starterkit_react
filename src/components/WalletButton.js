import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletButton = ({ isDarkMode }) => {

  const [connected, setConnected] = useState("Connect Wallet");
  const [error, setError] = useState(false);

  const connectWallet = async () => {
    try {
      // Prompt the user to connect their wallet
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // Perform further actions with the signer, such as interacting with contracts
        console.log('Wallet connected:', signer);
        setConnected("Connected")
      } else {
        console.log('No wallet provider found');
        setError(true);
        setConnected("No Wallet");
      }
    } catch (error) {
      console.log('Error connecting wallet:', error);
      setError(true);
        setConnected("Error occured");
    }
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 rounded-md ${
        isDarkMode ? 'dark-mode' : ''
      }`}
      onClick={connectWallet}
    >
      {connected}
    </button>
  );
};

export default WalletButton;
