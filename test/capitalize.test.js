import { expect } from "chai"
import capitalize from "../src/capitalize.js"

describe("capitalize tests", () => {

    it("should return the input string when already correctly capitalized", () => {
        expect(capitalize("There is a tree.")).to.equal("There is a tree.");
    })

    it("should capitalized if not capitalized", () => {
        expect(capitalize("there is a tree.")).to.equal("There is a tree.");
    })

    it("should uncapitalized non-starting letters if capitalized", () => {
        expect(capitalize("thEre Is A TREE.")).to.equal("There is a tree.");
    })

    it("should capitalize and uncapitalize non-ascii letters", () => {
        expect(capitalize("äÄh")).to.equal("Ääh");
    })
})