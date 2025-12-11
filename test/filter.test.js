import { expect } from "chai"
import filter from "../src/filter.js"

const array = [1, 2, 3, 4]
const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false }
]

describe("filter tests:", () => {

    it("Basic filtering from array should succeed", () => {
        expect(filter(array, n => n % 2 === 0)).to.have.same.members([2, 4]);
        expect(filter(array, n => n > 2)).to.have.same.members([3, 4]);
    })

    it("Should work with objects in arrays", () => {
        expect(filter(users, n => n.active)).to.have.same.members([users[0]]);
    })

    it("Should return empty array when no matches", () => {
        expect(filter(array, n => n > 5)).to.have.same.members([]);
    })

    it("Should return empty array when input array is empty", () => {
        expect(filter([], n => n === 1)).to.have.same.members([])
    })

    it("The original array should not change", () => {
        const result = filter(array, n => n > 1)

        expect(array).to.have.same.members([1, 2, 3, 4])
        expect(result).to.have.same.members([2, 3, 4])
    })
})