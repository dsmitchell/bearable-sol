const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bearable", function () {

    const twoBitBearsContract = "0x8ed25B735A788f4f7129Db736FC64f3A241137B8" // mainnet address
    const anOwner = "0x164a3938ecE2518bB99be3648bD215ca36059377"
    const noOwner = "0x0000000000000000000000000000000000000000"
    let bearable

    beforeEach(async () => {
        const Bearable = await ethers.getContractFactory("Bearable")
        bearable = await Bearable.deploy(twoBitBearsContract)
        await bearable.deployed()
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

    var expectColorToEqual = (color, expected) => {
        expect(color[0]).to.equal(expected >> 16, "red fail")
        expect(color[1]).to.equal((expected & 0xFF00) >> 8, "green fail")
        expect(color[2]).to.equal(expected & 0xFF, "blue fail")
        expect(color[3]).to.equal(0xFF, "alpha fail")
    }

})
