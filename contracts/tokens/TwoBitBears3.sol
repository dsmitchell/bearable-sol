// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@theappstudio/solidity/contracts/utils/OnChain.sol";
import "@theappstudio/solidity/contracts/utils/Randomization.sol";
import "../interfaces/IBear3TraitProvider.sol";
import "../interfaces/ICubTraitProvider.sol";
import "./TwoBitCubs.sol";

/// @title TwoBitBears3
abstract contract TwoBitBears3 is Ownable, IBear3TraitProvider, IERC721Enumerable, IERC721Metadata {

	/// Assigns the Gen 4 contract address for message caller verification
	function assignGen4(address gen4Contract) external virtual;

	/// Marks the Gen 3 Bear as having minted a Gen 4 Bear
	function claimGen4(uint256 tokenId) external virtual;

	/// Exposes the raw image SVG to the world, for any applications that can take advantage
	function imageSVG(uint256 tokenId) external virtual view returns (string memory);

	/// Exposes the image URI to the world, for any applications that can take advantage
	function imageURI(uint256 tokenId) external virtual view returns (string memory);

	/// Mints the provided quantity of TwoBitBear3 tokens
	/// @param parentOne The first gen 2 bear parent, which also determines the mood
	/// @param parentTwo The second gen 2 bear parent
	function mateBears(uint256 parentOne, uint256 parentTwo) external virtual;
}
