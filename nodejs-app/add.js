function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add expects two numbers");
  }
  return a + b;
}

module.exports = add;
