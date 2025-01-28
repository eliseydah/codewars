function findMissingLetter(array) {
  const alphabet = [
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
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let missingLetter = "";
  let firstItemIndex = alphabet.indexOf(array[0]);
  let lastItemIndex = alphabet.indexOf(array[array.length - 1]);
  let compareArray = alphabet.splice(
    firstItemIndex,
    lastItemIndex - firstItemIndex + 1
  );
  for (let i = 0; i < compareArray.length; i++) {
    if (!array.includes(compareArray[i])) {
      return compareArray[i];
    }
  }
}

// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //e
// console.log(findMissingLetter(["O", "Q", "R", "S"])); //P
console.log(findMissingLetter(["K", "M", "N", "O"])); //L
