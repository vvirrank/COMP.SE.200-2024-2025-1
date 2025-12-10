import { expect } from "chai"
import words from "../src/words.js"

describe("words tests", () => {

    describe("without pattern", () => {

        it("should return empty list for empty string", () => {
            expect(words("")).to.have.same.members([]);
        })

        it("should return one word list when give single word string", () => {
            expect(words("string")).to.have.same.members(["string"]);
        })

        it("should successfully split space separated sentence", () => {
            expect(words("testa testb testc")).to.have.same.members(["testa", "testb", "testc"]);
        })

        it("should split string on newline", () => {
            expect(words("testa\ntestb\ntestc")).to.have.same.members(["testa", "testb", "testc"]);
        })

        it("should split string on tab", () => {
            expect(words("testa\ttestb\ttestc")).to.have.same.members(["testa", "testb", "testc"]);
        })

        it("should split string on carriage return", () => {
            expect(words("testa\rtestb\rtestc")).to.have.same.members(["testa", "testb", "testc"]);
        })

        it("should split string on comma, and ignore the comma", () => {
            expect(words("testa, testb, testc")).to.have.same.members(["testa", "testb", "testc"]);
        })

        it("should consider hyphenated words as two words", () => {
            expect(words("load-bearing")).to.have.same.members(["load", "bearing"]);
        })

        it("should handle special letters as part of the word without splitting", () => {
            expect(words("käärme ja lisko")).to.have.same.members(["käärme", "ja", "lisko"]);
        })

        it("should split camel case sentences", () => {
            expect(words("ThereAreThreeRocks")).to.have.same.members(["There", "Are", "Three", "Rocks"]);
        })

        it("should treat undefined string as empty", () => {
            expect(words(undefined)).to.have.same.members([]);
        })
    })

    describe("with pattern", () => {

        it("should not split on default separators when pattern provided", () => {
            expect(words("3,14:with spaces:thirdElement", /[^:]+/g)).to.have.same.members(["3,14", "with spaces", "thirdElement"]);
        })

        it("should return empty when pattern does not match anything", () => {
            expect(words("ABCD", /[^A-Z]+/g)).to.have.same.members([]);
        })

        it("should return only one element when pattern only excludes characters from either end", () => {
            expect(words("::middle::", /[^:]+/g)).to.have.same.members(["middle"]);
        })

        it("should match nothing when pattern is null", () => {
            expect(words("one two three", null)).to.have.same.members([]);
        })
    })
})