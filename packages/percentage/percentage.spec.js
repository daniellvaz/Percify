const { percentage } = require("./lib/percentage");

test("(150 * 100) / 1500 = 10", () => {
  expect(percentage(150, 1500)).toBe(10);
});
