import { substract, sum } from "../src/exercise1/exercise1";


describe('exercise 1', () => {
  it('sum should return correct result', () => {
    expect(sum(1,1)).toBe(2);
  })

  it('substract should return correct result', () => {
    expect(substract(2,1)).toBe(1);
  })
})