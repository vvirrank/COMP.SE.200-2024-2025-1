import { expect } from "chai"
import endsWith from "../src/endsWith.js"

describe("endsWith tests", () => {

    describe("without position", () => {

        it("should return true for last letter", () => {
            expect(endsWith("abcde", "e")).to.equal(true);
        })

        it("should return true for last three letters", () => {
            expect(endsWith("abcde", "cde")).to.equal(true);
        })

        it("should return false for first three letters", () => {
            expect(endsWith("abcde", "abc")).to.equal(false);
        })

        it("should return true for entire string", () => {
            expect(endsWith("abcde", "abcde")).to.equal(true);
        })

        it("should return false when strings swapped", () => {
            expect(endsWith("cde", "abcde")).to.equal(false);
        })

        it("should treat undefined string as empty", () => {
            expect(endsWith(undefined, "a")).to.equal(false);
        })
    })

    describe("with position", () => {

        it("should return false for first letter at position 0", () => {
            expect(endsWith("abcde", "a", 0)).to.equal(false);
        })

        it("should return true for last letter at position len", () => {
            expect(endsWith("abcde", "e", 5)).to.equal(true);
        })

        it("should return false for entire string at position 0", () => {
            expect(endsWith("abcde", "abcde", 0)).to.equal(false);
        })

        it("should return true for entire string at position len", () => {
            expect(endsWith("abcde", "abcde", 5)).to.equal(true);
        })

        it("should return true for substring ending at position", () => {
            expect(endsWith("abcde", "cd", 4)).to.equal(true);
        })

        it("should return true for last letter with position greater than length", () => {
            expect(endsWith("abcde", "e", 10)).to.equal(true);
        })

        it("should return false for entire string with negative position", () => {
            expect(endsWith("abcde", "abcde", -10)).to.equal(false);
        })

        it("should return false for entire string with non-number position", () => {
            expect(endsWith("abcde", "abcde", "aaa")).to.equal(false);
        })

    })
})