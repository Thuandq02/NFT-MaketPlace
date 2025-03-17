const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const Module = buildModule("NFTMarketplaceModule", (m) => {
  const myContract = m.contract("NFTMarketplace");

  return { myContract };
});

module.exports = Module;