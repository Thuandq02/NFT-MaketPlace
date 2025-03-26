require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: process.env.RPC_URL, // Địa chỉ của Ganache
      accounts: [
        process.env.PRIVATE_KEY
      ]
    }
  }
};
