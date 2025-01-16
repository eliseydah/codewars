function longestConsec(strarr, k) {
  console.log(strarr);
  console.log(k);
  let newObj = {};
  let newString = "";
  let indexArray = [];
  if (strarr.length === 0 || k <= 0) {
    return newString;
  }
  for (let i = 0; i < strarr.length; i++) {
    newObj[strarr[i]] = strarr[i].length;
  }

  const sortedEntries = Object.entries(newObj).sort(
    ([, valueA], [, valueB]) => valueB - valueA
  );
  for (let i = 0; i < k; i++) {
    indexArray.push(strarr.indexOf(sortedEntries[i][0]));
  }
  let foo = indexArray.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < foo.length; i++) {
    newString += strarr[foo[i]];
  }
  return newString;
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
// console.log(
//   longestConsec(
//     [
//       "ejjjjmmtthh",
//       "zxxuueeg",
//       "aanlljrrrxx",
//       "dqqqaaabbb",
//       "oocccffuucccjjjkkkjyyyeehh",
//     ],
//     1
//   )
// );
// console.log(
//   longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
// );
// console.log(high("what time are we climbing up the volcano"));
