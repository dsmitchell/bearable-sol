// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../interfaces/IBearRenderTech.sol";

/// @title BearRenderTech contract for accessing TwoBitBears Generation 3 metadata
abstract contract BearRenderTech is IBearRenderTech {

	/// @dev When Reveal is false. For mainnet the reveal has already been called
	error NotYetRevealed();

	/// Wen the world is ready
	/// @dev Only the contract owner can invoke this, which has already been called in mainnet
	function revealBears() external virtual;
}
