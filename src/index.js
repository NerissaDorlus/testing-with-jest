// returns the sum if a> b, or the difference otherwise

const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "❌ Bad Input";
  }
  if (a < b) {
    return b - a;
  }
  return a + b;
};

//write a function that raise a number to the third power

export const cube = (num) => {
  if (typeof num !== "number") {
    return "Bad input";
  }
  return num ** 3;
};

const mathService = {
  sum: sum,
  cube: cube,
};

export default mathService;
