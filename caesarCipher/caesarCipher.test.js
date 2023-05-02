import caesarCipher from "./caesarCipher";

test.skip("string 'aaa' with shift 1", () => {
  expect(caesarCipher("aaa", 1)).toBe("bbb");
});

test.skip("string 'yyy' with shift 2", () => {
  expect(caesarCipher("yyy", 2)).toBe("aaa");
});

test.skip("string 'aaa' with shift -1", () => {
  expect(caesarCipher("aaa", -1)).toBe("zzz");
});

test.skip("string ',,,' with shift 1", () => {
  expect(caesarCipher(",,,", 1)).toBe(",,,");
});
