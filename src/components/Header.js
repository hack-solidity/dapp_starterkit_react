import React from 'react';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`py-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hack Solidity</h1>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            isDarkMode ? 'dark-mode' : ''
          }`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
