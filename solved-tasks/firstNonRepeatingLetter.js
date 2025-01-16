function firstNonRepeatingLetter(s) {
  let newArray = s.split("");
  for (let i = 0; i < newArray.length; i++) {
    let forArtemLetter = newArray[i];
    let localArray = newArray.filter((item) => {
      if (item.toLowerCase() === forArtemLetter.toLowerCase()) {
        return false;
      }
      return true;
    });
    let value = newArray.length - localArray.length;
    if (value === 1) {
      return forArtemLetter;
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("sTreSS")); // 'T'
console.log(firstNonRepeatingLetter("moonmen")); //e
console.log(firstNonRepeatingLetter("a")); //'a'

// for (let i = 0; i < newArray.length; i++) {
//   if (!newArray[i]) {
//     continue;
//   }
//   if (
//     !(newObj[newArray[i].toLowerCase()] || newObj[newArray[i].toUpperCase()])
//   ) {
//     newObj[newArray[i]] = 1;
//   } else {
//     newObj[newArray[i]] += 1;
//   }
// }
// for (keys in newObj) {
//   if (newObj[keys] > 1) {
//     continue;
//   } else {
//     array.push(keys);
//   }
// }
// return array[0] || "";
