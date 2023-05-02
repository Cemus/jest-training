function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    const element = string[i];
    result = result + element;
  }
  return result;
}
export default reverseString;
