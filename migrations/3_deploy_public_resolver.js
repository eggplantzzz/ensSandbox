const PublicResolver = artifacts.require("@ensdomains/resolvers/PublicResolver.sol");

module.exports = async (deployer) => {
  console.log("the public resolver --> %o", PublicResolver);
  const publicResolver = await PublicResolver.new("0x1212121212121212121212121212121212121212");
  console.log("looks like the public resolver was deployed");
}
