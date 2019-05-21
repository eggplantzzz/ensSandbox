const ENS = artifacts.require("@ensdomains/ens/ENSRegistry");
const FIFSRegistrar = artifacts.require("@ensdomains/ens/FIFSRegistrar");
const namehash = require('eth-ens-namehash');
const sha3 = require('web3-utils').sha3;


module.exports = async (deployer, network, accounts) => {
  const ens = await ENS.new();
  let owner = await ens.owner("0x0");
  console.log("looks like the registry contract was deployed at %o with owner %o", ens.address, owner);

  // Create a new registrar for the root node of the registry
  const topLevelRegistrar = await FIFSRegistrar.new(ens.address, "0x0");
  console.log("first registrar deployed");

  // Give registrar ownership of root node
  await ens.setOwner("0x0", topLevelRegistrar.address, { from: accounts[0] });
  console.log("about to register");

  // Register alice as top level name
  await topLevelRegistrar.register(sha3("alice"), accounts[8]);
  console.log("registered alice");
  const aliceOwner = await ens.owner(namehash.hash("alice"));
  console.log("alice owner is --> %o -- %o", aliceOwner, accounts[8]);

  // Create alice subdomain
  await ens.setSubnodeOwner(namehash.hash("alice"), sha3("test"), accounts[6], { from: aliceOwner });
  console.log("test.alice registered");
  const testAliceOwner = await ens.owner(namehash.hash("test.alice"));
  console.log("testAliceOwner --> %o -- %o", testAliceOwner, accounts[6])

  // Create sub.test.alice subdomain
  await ens.setSubnodeOwner(namehash.hash("test.alice"), sha3("sub"), accounts[4], { from: accounts[6] });
  console.log("sub.test.alice registered");
  const subTestAliceOwner = await ens.owner(namehash.hash("sub.test.alice"));
  console.log("subTestAliceOwner --> %o -- %o", subTestAliceOwner, accounts[4])
}
