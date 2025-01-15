const hre = require("hardhat");

async function main() {
  // Get the first signer (deployer)
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

 
  // Create contract factory and deploy
  console.log("Creating contract factory...");
  const Chai = await hre.ethers.getContractFactory("chai");
  console.log("Deploying contract...");
  const chai = await Chai.deploy();
  
}

// Error handling
main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});
