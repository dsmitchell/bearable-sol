// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../tokens/TwoBitBears.sol";
import "../tokens/TwoBitBears3.sol";
import "../tokens/TwoBitCubs.sol";

/// @title Goldilocks container contract
/// @dev This contract is meant to be inherited
contract Goldilocks {

	/// Reference to the TwoBit Bears Gen 1 contract
	/// @dev Trailing `_` allows us to pass Slither tests, while also communicating that this value is not public
	TwoBitBears internal immutable gen1Bears_;

	/// Reference to the TwoBitCubs (Gen 2) contract
	TwoBitCubs internal immutable gen2Bears_;

	/// Reference to the TwoBitBears Gen 3 contract
	TwoBitBears3 internal immutable gen3Bears_;

	/// Constructs the Goldilocks container contract that references the first 3 generations of TwoBitBears
	/// @param twoBitBears The address of the O.G. TwoBitBears contract
	/// @param twoBitCubs The address of the contract for the second generation of TwoBitBears
	/// @param twoBitBears3 The address of the contract for the third generation of TwoBitBears
	constructor(address twoBitBears, address twoBitCubs, address twoBitBears3) {
		gen1Bears_ = TwoBitBears(twoBitBears);
		gen2Bears_ = TwoBitCubs(twoBitCubs);
		gen3Bears_ = TwoBitBears3(twoBitBears3);
	}
}
