const E = require("ethereum-ens");
const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const e = new E(provider);

module.exports = (deployer, networks, accounts) => {
  console.log("about to set resolver");
  const something = await e.setResolver("tyler", "0x1212121212121212121212121212121212121212");
  // const something = await e.setResolver("tyler", secondAddress);
  console.log("about to resolve tyler");
  const address = await e.owner("tyler");
  console.log("the second account is --> %o", secondAddress);
  await ens.setOwner("tyler", secondAddress, { from: firstAddress });
  console.log("the address is as follows: %o", address);
  console.log("the first account is:      %o", accounts[1]);
}
