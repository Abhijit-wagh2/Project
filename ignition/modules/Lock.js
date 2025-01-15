const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  console.log("Creating contract factory...");
  const Chai = await hre.ethers.getContractFactory("Chai");

  console.log("Deploying contract...");
  const chai = await Chai.deploy();

  console.log("Deployment result:", chai);
  await chai.deployed();

  console.log("Contract deployed at address:", chai.address);
}

main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});
