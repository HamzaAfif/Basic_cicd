const add = require("./add");

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("throws if inputs are not numbers", () => {
    expect(() => add("2", 3)).toThrow(TypeError);
  });
});
