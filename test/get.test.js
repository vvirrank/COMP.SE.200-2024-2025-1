import { expect } from "chai"
import get from "../src/get.js"

describe("Get tests:", () => {

    it("simple get", () => {
        expect(get({ a: 1 }, 'a')).to.equal(1)
    })

    it("Nested object", () => {
        const obj = { a: { b: { c: 3 } } }
        expect(get(obj, 'a.b.c')).to.equal(3)
    })

    it("Nested object with array index", () => {
        const obj = { a: [{ b: 2 }] }
        expect(get(obj, 'a[0].b')).to.equal(2)
    })

    it("Should return undefined if path is empty", () => {
        const obj = { a: 1 }
        expect(get(obj, '')).to.equal(undefined)
    })

    it("Should return undefined if array path empty", () => {
        const obj = { a: 5 }
        expect(get(obj, [])).to.equal(undefined)
    })

    it("Should return defaultValue if it given and result undefined", () => {
        const obj = { a: 5 }
        expect(get(obj, [], 'default')).to.equal('default')
    })

    it("Should not return default if value is null", () => {
        const obj = { a: null }
        expect(get(obj, 'a')).to.equal(null)
    })

    it("Object with false as a value should return false", () => {
        const obj = { a: false }
        expect(get(obj, 'a')).to.equal(false)
    })

    it("Object with undefined as a value should return undefined", () => {
        const obj = { a: undefined }
        expect(get(obj, 'a')).to.equal(undefined)
    })
})