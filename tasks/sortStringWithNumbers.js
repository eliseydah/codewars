function getNumber(arrItem) {
  for (let i = 0; i < arrItem.length; i++) {
    if (Number(arrItem[i])) {
      return Number(arrItem[i]);
    }
  }
}
function order(words) {
  if (words === "") {
    return words;
  }
  let newArray = words.split(" ");
  let finalArray = [];
  for (let i = 0; i < newArray.length; i++) {
    // console.log(getNumber(newArray[i]));
    finalArray.push([newArray[i], getNumber(newArray[i])]);
  }
  return finalArray
    .sort(function (a, b) {
      return a[1] - b[1];
    })
    .map((item) => {
      return item[0];
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
