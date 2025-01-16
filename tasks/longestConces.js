function longestConsec(strarr, k) {
  let theLongestString = "";
  if ((strarr.length = 0 || k <= 0)) {
    return "";
  }
  for (let i = 0; i < strarr.length; i++) {
    let newSubArray = strarr.slice(i, k + i);
    if (countLength(newSubArray).length > theLongestString.length) {
      theLongestString = countLength(newSubArray);
    } else {
      theLongestString = theLongestString;
    }
  }
  return theLongestString;
}
function countLength(arr) {
  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(longestConsec(["it", "wkppv", "zzzzzzzzzzzz", "ixoyx", "3452"], 3));
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
);
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
);

// let theLongestElement = "";
// for (let i = 0; i < strarr.length; i++) {
//   if (theLongestElement.length < strarr[i].length) {
//     theLongestElement = strarr[i];
//   } else {
//     theLongestElement = theLongestElement;
//   }
// }
// let LongestItemInArray = strarr.indexOf(theLongestElement);
