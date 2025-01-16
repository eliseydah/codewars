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
];

function high(x) {
  let compareArray = [];
  let newArray = x.split(" ");
  for (let i = 0; i < newArray.length; i++) {
    compareArray.push([newArray[i], returnSum(newArray[i])]);
  }
  let sortArray = compareArray.sort(function (a, b) {
    return b[1] - a[1];
  });
  return sortArray[0][0].toString();
}
function returnSum(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += alphabet.indexOf(word[i]) + 1;
  }
  console.log(sum);
  return sum;
}
console.log(high("man i need a taxi up to ubud"));
// console.log(high("what time are we climbing up the volcano"));
