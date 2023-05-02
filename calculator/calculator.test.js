import calculator from "./calculator";

test.skip("add 1 + 1", () => {
  expect(calculator().add(1, 1)).toBe(2);
});
test.skip("sub 1 - 1", () => {
  expect(calculator().sub(1, 1)).toBe(0);
});
test.skip("divide 1 / 1", () => {
  expect(calculator().divide(1, 1)).toBe(1);
});
test.skip("multiply 1 * 1", () => {
  expect(calculator().multiply(1, 1)).toBe(1);
});
