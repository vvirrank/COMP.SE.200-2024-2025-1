import { expect } from "chai"
import add from "../src/add.js"

describe("addTests", () => {

    it("should add integers successfully", () => {
        expect(add(3, 5)).to.equal(8);
    })

    it("should add negative integer successfully", () => {
        expect(add(4, -6)).to.equal(-2);
    })

    it("should add decimal numbers successfully", () => {
        expect(add(2.5, 1.75)).to.equal(4.25);
    })

    it("should return zero with both undefined arguments", () => {
        expect(add(undefined, undefined)).to.equal(0);
    })

    it("should treat undefined values as zero", () => {
        expect(add(23, undefined)).to.equal(23);
    })

    it("should treat null value as zero", () => {
        expect(add(null, 18)).to.equal(18);
    })

    it("should successfully parse integer from string", () => {
        expect(add('8', 12)).to.equal(20);
    })

    it("should successfully parse integer from both string arguments", () => {
        expect(add('6', '5')).to.equal(11);
    })

    it("should return NaN when called with non-number string argument", () => {
        expect(add('parameter', 5)).to.equal(NaN);
    })

    it("should successfully add two very large numbers", () => {
        expect(add(2147483647, 2147483647)).to.equal(4294967294);
    })

    it("should successfully add two very small numbers", () => {
        expect(add(-2147483647, -2147483647)).to.equal(-4294967294);
    })
})