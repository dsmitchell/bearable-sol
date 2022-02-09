// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "../interfaces/IBearDetail.sol";

/// Represents a deployed TwoBitBears contract
abstract contract TwoBitBears is Ownable, IBearDetail, IERC721Enumerable, IERC721Metadata {

	/// The only public non-interface function declared usable for any caller
	/// @dev This call will fail for the official mainnet contract because TwoBitBears are sold out
	function createBear(uint256 quantity) public payable virtual;
}
