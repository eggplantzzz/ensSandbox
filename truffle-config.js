const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "faith shield bright arm divide admit sting stand atom cruise sick perfect";

module.exports = {
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "http://localhost:8545", 0, 9);
      },
      network_id: "*",       // Any network (default: none)
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
