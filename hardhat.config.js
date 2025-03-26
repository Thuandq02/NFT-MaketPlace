require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "HTTP://0.0.0.0:8545", // Địa chỉ của Ganache
      accounts: [
        ''
      ]
    }
  }
};
