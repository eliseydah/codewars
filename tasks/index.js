function isPangram(string) {
  let alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let compareArray = string
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("");
  for (let i = 0; i < alphabetArray.length; i++) {
    if (!compareArray.includes(alphabetArray[i])) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
