import * as dotenv from "dotenv"

import { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "solidity-coverage"

dotenv.config()

export const bearConfig = {
	bearsContract: {
		mainnet: "0x8ed25B735A788f4f7129Db736FC64f3A241137B8",
	},
	cubsContract: {
		mainnet: "0x488c057cf3dee9ee2e386112e08f2c6d8e58cdfb",
	},
	gen3Contract: {
		mainnet: "0x279f1ABB8649eA5AF64AFACC6511cb41f512bEC1",
	},
	renderTechContract: {
		mainnet: "0x12BF69431C647EDA31b1C5E8F9EfA3aA03BFa401",
	},
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
	solidity: {
		compilers: [
			{
				version: "0.8.11",
				settings: {
					optimizer: { enabled: true }
				}
			}
		]
	},
	networks: {
		hardhat: {
			chainId: 1337,
			forking: {
				url: process.env.MAINNET_RPC_URL || "",
				blockNumber: 14171864,
			},
		},
	},
	gasReporter: {
		enabled: true,
		currency: "USD"
	},
}

export default config
