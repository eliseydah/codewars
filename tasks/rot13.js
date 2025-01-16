function findLetter(array, index) {
  let cipher = array.indexOf(index);
  if (cipher + 13 < array.length) {
    return array[cipher + 13];
  } else {
    return array[cipher + 13 - 26];
  }
}

let smallLettersArray = [
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

let bigLettersArray = [
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

function rot13(message) {
  let stringValue = message.split("");
  let newCipher = [];
  for (let i = 0; i < stringValue.length; i++) {
    if (smallLettersArray.indexOf(stringValue[i]) !== -1) {
      newCipher.push(findLetter(smallLettersArray, stringValue[i]));
    } else if (bigLettersArray.indexOf(stringValue[i]) !== -1) {
      newCipher.push(findLetter(bigLettersArray, stringValue[i]));
    } else {
      newCipher.push(stringValue[i]);
    }
  }

  return newCipher.join("");
}

// console.log(rot13("test")); //"grfg"
// console.log(rot13("TEST")); //"Grfg"
console.log(rot13("abcdefghijklmnopqrstuvwxyz")); // 'Ehol vf pbby!'
