import { expect } from "chai"
import defaultTo from "../src/defaultTo.js"

describe("defaultTo tests:", () => {

    it("returns the value when it is not null, NaN or undefined", () => {
        expect(defaultTo(5, 10)).to.equal(5)
        expect(defaultTo("abc", "def")).to.equal("abc")
        expect(defaultTo(false, true)).to.equal(false)
    })

    it("empty string should be valid", () => {
        expect(defaultTo("", "abc")).to.equal("")
    })

    it("should return defaultValue when value is null", () => {
        expect(defaultTo(null, 10)).to.equal(10)
    })

    it("should return defaultValue when value is undefined", () => {
        expect(defaultTo(undefined, 7)).to.equal(7)
    })

    it("should return defaultValue when value is NaN", () => {
        expect(defaultTo(NaN, "defaultValue")).to.equal("defaultValue")
    })

})