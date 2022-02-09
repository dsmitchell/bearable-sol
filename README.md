# Bearable Solidity SDK for the family of TwoBitBears NFT's

This project demonstrates how to provide smart contract functionality to official holders of [TwoBitBears](https://etherscan.io/address/0x8ed25b735a788f4f7129db736fc64f3a241137b8#code), the series of 5000 Hyper-Realistic Algorithmically Generated Crypto Collectable Bears Minted on the Ethereum Blockchain.

The first example of this capability can be found with the collaboration between [Honey Computing & TwoBitBears](https://cubs.cloud)

Also included is the `Goldilocks` base contract, which provides access to the first 3 generations of `TwoBitBears`, which will be used in upcoming projects.

## Tests

If you cloned this project from git, to run the tests you will need to create an `.env` file with an entry for MAINNET_RPC_URL, e.g.

```
MAINNET_RPC_URL = https://eth-mainnet.alchemyapi.io/v2/{your_api_key}
```

Then you may execute unit tests with:

> npx hardhat test

And coverage tests with:

> npx hardhat coverage

## Reference

For further reference, you may check out the code of [TwoBitBears + Honey](https://etherscan.io/address/0x65b7990ab726ef573c176bb8b9b5464de6ea6c89#code)
