// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "../interfaces/ICubTraitProvider.sol";

/// @title TwoBitCubs
abstract contract TwoBitCubs is Ownable, ICubTraitProvider, IERC721Enumerable, IERC721Metadata {

	/// @dev The number of blocks until a growing cub becomes an adult (roughly 1 week)
	uint256 public constant ADULT_AGE = 44000;
}
