import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Balance = ({ isDarkMode }) => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const balance = await provider.getBalance(address);
          const formattedBalance = ethers.utils.formatEther(balance);
          setBalance(formattedBalance);
        } else {
          console.log('No wallet provider found');
        }
      } catch (error) {
        console.log('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className={`my-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <p className="text-md flex justify-center">Wallet Balance: {balance === '' ? "--" : balance.slice(0, 4)} ETH</p>
    </div>
  );
};

export default Balance;
