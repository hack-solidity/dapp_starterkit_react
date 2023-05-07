require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const { INFURA_PROJECT_ID, MNEMONIC, ALCHEMY_ID } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  }, namedAccounts: {
    deployer: {
      default: 0, // use the first account as deployer
    },
  },
};
