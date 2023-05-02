function capitalize(string) {
  let str = string.slice(0, 1);
  const rest = string.slice(1, string.length);
  str = str.toUpperCase();
  const result = str + rest;
  return result;
}
export default capitalize;
