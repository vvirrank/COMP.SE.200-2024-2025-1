import { expect } from "chai"
import isEmpty from "../src/isEmpty.js"
import isArguments from "../src/isArguments.js";

function isArgumentsEmpty() {
    return isEmpty(arguments);
}

describe("isEmptyTests", () => {

    it("should return true for null", () => {
        expect(isEmpty(null)).to.equal(true);
    })

    it("should return true for undefined", () => {
        expect(isEmpty(undefined)).to.equal(true);
    })

    it("should return true for empty array", () => {
        expect(isEmpty([])).to.equal(true);
    })

    it("should return true for empty object", () => {
        expect(isEmpty({})).to.equal(true);
    })

    it("should return true for empty object prototype", () => {
        expect(isEmpty(Object.prototype)).to.equal(true);
    })

    it("should return true for empty set", () => {
        expect(isEmpty(new Set([]))).to.equal(true);
    })

    it("should return true for empty map", () => {
        expect(isEmpty(new Map([]))).to.equal(true);
    })

    it("should return true for empty string", () => {
        expect(isEmpty("")).to.equal(true);
    })

    it("should return true for empty typed array", () => {
        expect(isEmpty(new Int32Array())).to.equal(true);
    })

    it("should return true for empty string", () => {
        expect(isArgumentsEmpty()).to.equal(true);
    })

    it("should return false for non-empty array", () => {
        expect(isEmpty([1])).to.equal(false);
    })

    it("should return false for object with keys that have null as value", () => {
        expect(isEmpty({ test: null, test2: null })).to.equal(false);
    })

    it("should return false for object with keys that have undefined as value", () => {
        expect(isEmpty({ test: undefined, test2: undefined })).to.equal(false);
    })
})
