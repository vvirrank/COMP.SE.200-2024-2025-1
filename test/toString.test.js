import { expect } from "chai"
import toString from "../src/toString.js"

describe("toString tests:", () => {

    it("Should return string if already string", () => {
        expect(toString('name')).to.equal('name');
    })

    it("Should convert number to string succesfully", () => {
        expect(toString(20)).to.equal('20');
    })

    it("Should convert decimal number to string correctly", () => {
        expect(toString(4.17)).to.equal('4.17');
    })

    it("Should keep the '-' when converting -0", () => {
        expect(toString(-0)).to.equal('-0');
    })

    it("Should convert 0 to string succesfully", () => {
        expect(toString(0)).to.equal('0');
    })

    it("Should return empty string for null", () => {
        expect(toString(null)).to.equal('');
    })

    it("Should return empty string for undefined", () => {
        expect(toString(undefined)).to.equal('');
    })

    it("Should join converted values with commas when converting arrays", () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    })

})
