function caesarCipher(string, shiftFactor) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let shift = shiftFactor;
    let lettre = string.charAt(i);
    if (lettre.charCodeAt(0) < 65 || lettre.charCodeAt(0) > 122) {
      lettre = lettre;
    } else {
      if (shiftFactor > 0) {
        while (shift !== 0) {
          if (lettre === "z" || lettre === "Z") {
            lettre = lettre.charCodeAt(0) - 26 + 1;
            lettre = String.fromCharCode(lettre);
          } else {
            lettre = lettre.charCodeAt(0) + 1;
            lettre = String.fromCharCode(lettre);
          }
          shift--;
        }
      }
      if (shiftFactor < 0) {
        while (shift !== 0) {
          if (lettre === "a" || lettre === "A") {
            lettre = lettre.charCodeAt(0) + 26 - 1;
            lettre = String.fromCharCode(lettre);
          } else {
            lettre = lettre.charCodeAt(0) - 1;
            lettre = String.fromCharCode(lettre);
          }
          shift++;
        }
      }
    }
    result = result + lettre;
  }
  return result;
}
export default caesarCipher;
