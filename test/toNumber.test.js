import { expect } from "chai"
import toNumber from "../src/toNumber.js"

describe("toNumbertests:", () => {

    it("Number to number", () => {
        expect(toNumber(12)).to.equal(12);
    })

    it("Decimal string to decimal number", () => {
        expect(toNumber("12.3")).to.equal(12.3);
    })

    it("Should ensure -0 preserved", () => {
        expect(toNumber("-0")).to.equal(-0);
    })

    it("Minimum number", () => {
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    })

    it("Infinity", () => {
        expect(toNumber(Infinity)).to.equal(Infinity);
    })

    it("Negative string number should convert to negative number", () => {
        expect(toNumber("-32")).to.equal(-32);
    })

    it("Should convert string to number succesfully", () => {
        expect(toNumber("11")).to.equal(11);
    })

    it("Should return NaN for invalid symbols", () => {
        expect(Number.isNaN(toNumber("abc"))).to.equal(true);
    })

    it("Should conver Boolean to number succesfully", () => {
        expect(toNumber(true)).to.equal(1)
    })

    it("Null should convert to 0", () => {
        expect(toNumber(null)).to.equal(0)
    })

    it("Object with valueOf returning number", () => {
        expect(toNumber({valueOf: () => 7})).to.equal(7)
    })
})