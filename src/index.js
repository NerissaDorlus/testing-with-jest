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

export default sum;
