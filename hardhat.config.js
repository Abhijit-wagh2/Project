
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SEPOLIA_URL = process.env.SEPOLIA_URL; // Ensure you set this in your .env file
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/mbJkgkV0Rd6q4SxCWG9MPyUwFG94OGTp`, // Replace with your Sepolia RPC provider
      accounts: [PRIVATE_KEY],
    },
  },
};

