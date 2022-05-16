import sut from "../src/index.js";

describe("The test forr sum", () => {
  fit("should add 2 numbers", () => {
    //arrange
    const c = 3;
    const d = 5;
    const expected = 2;

    //act
    const actual = sut(c, d);

    //assert
    expect(actual).toBe(expected);
  });
  it("should add 2 numbers", () => {
    //arrange
    const c = 5;
    const d = 3;
    const expected = 8;

    //act
    const actual = sut(c, d);

    //assert
    expect(actual).toBe(expected);
  });
  it("should fail with a string input", () => {
    //arange
    const a = "str",
      b = 5,
      expected = "❌ Bad Input";

    //Act
    const actual = sut(a, b);

    //assert
    expect(actual).toBe(expected);
  });
});
