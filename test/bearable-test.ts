import { expect } from "chai"
import { ethers } from "hardhat"
import { bearConfig } from '../hardhat.config'
import { Bearable, TwoBitBears } from "../typechain-types"
import { ISVGTypes } from "../typechain-types/IBearable"

describe("Bearable", function () {

	let anOwner: string
	const noOwner = "0x0000000000000000000000000000000000000000"
	let bearable: Bearable

	beforeEach(async () => {
		const Bearable = await ethers.getContractFactory("Bearable")
		bearable = await Bearable.deploy(bearConfig.bearsContract.mainnet) as Bearable
		await bearable.deployed()
		let twoBitBears = await ethers.getContractAt("TwoBitBears", bearConfig.bearsContract.mainnet) as TwoBitBears
		anOwner = await twoBitBears.ownerOf(0)
	})

	it("Should returns correct ownsBear", async function () {
		expect(await bearable.ownsBear(anOwner, 0)).to.be.true
		expect(await bearable.ownsBear(anOwner, 1)).to.be.false
		expect(await bearable.ownsBear(noOwner, 0)).to.be.false
	})

	it("Should returns correct total bears", async function () {
		expect(await bearable.totalBears()).to.be.equal(5000)
	})

	it("Should return correct bottom colors", async function () {
		expectColorToEqual(await bearable.bearBottomColor(0), 0xDAE2E1)
	})

	it("Should return correct mood", async function () {
		expect(await bearable.bearMood(0)).to.be.equal(1)
	})

	it("Should return correct species", async function () {
		expect(await bearable.bearSpecies(0)).to.be.equal(2)
	})

	it("Should return correct top colors", async function () {
		expectColorToEqual(await bearable.bearTopColor(0), 0xE0EBEA)
	})

	var expectColorToEqual = (color: ISVGTypes.ColorStructOutput, expected: number) => {
		expect(color.red).to.equal(expected >> 16, "red fail")
		expect(color.green).to.equal((expected & 0xFF00) >> 8, "green fail")
		expect(color.blue).to.equal(expected & 0xFF, "blue fail")
		expect(color.alpha).to.equal(0xFF, "alpha fail")
	}
})
