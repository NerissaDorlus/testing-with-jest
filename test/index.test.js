const sut = require("../src/index.js");

TextDecoderStream("should add 2 numbers", () => {
  //arrange
  const c = 2;
  const d = 3;
  const expect = 5;

  //act
  const actual = sut(c, d);

  //assert
  expect(actual).toBe(expected);
});