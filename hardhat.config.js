require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://geist-mainnet.g.alchemy.com/v2/_1dXC6hMhk1zwmDdJzhjFzKtiBkINCOE`,
      accounts: [PRIVATE_KEY],
    },
  },
};