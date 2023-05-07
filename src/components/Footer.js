import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container mx-auto flex justify-center">
        <p className="text-center">
        Built with &hearts; by <a className='text-inherit underline' href='https://hacksolidity.online' target='_blank' rel='norefferer noopener'>Hack Solidity</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
