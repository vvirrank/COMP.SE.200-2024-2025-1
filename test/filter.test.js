import { expect } from "chai"
import filter from "../src/filter.js"

const array = [1, 2, 3, 4]
const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false }
]

describe("filter tests:", () => {

    it("Basic filtering from array should succeed", () => {
        expect(filter(array, n => n % 2 === 0)).to.equal([2, 4]);
        expect(filter(array, n => n > 2)).to.equal([3, 4]);
    })

    it("Should work with objects in arrays", () => {
        expect(filter(users, n => n.active)).to.equal([
            {user: 'barney', active: true}
        ]);
    })

    it("Should return empty array when no matches", () => {
        expect(filter(array, n => n > 5)).to.equal([]);
    })

    it("Should return empty array when input array is empty", () => {
        expect(filter([], n => n === 1)).to.equal([])
    })

    it("The original array should not change", () => {
        const result = filter(array, n => n > 1)

        expect(array).to.equal([1, 2, 3, 4])
        expect(result).to.equal([2, 3, 4])
    })
})