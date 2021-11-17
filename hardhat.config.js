require("dotenv").config()

require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
          version: "0.8.10",
          settings: {
              optimizer: { enabled: true }
          }
      }
    ]
  },
  networks: {
    hardhat: {
        forking: {
          url: process.env.RPC_URL,
          blockNumber: 13540938, // Ensure tests work by locking to this mainnet block number
        },
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD"
  },
}
