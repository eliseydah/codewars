function sortArray(array) {
  let odd = [];
  let even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      odd.push(array[i]);
    } else {
      even.push([array[i], array.indexOf(array[i], i)]);
      // even[array[i]] = array.indexOf(array[i]);
    }
  }
  // console.log(even);
  let newArray = odd.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < even.length; i++) {
    newArray.splice(even[i][1], 0, even[i][0]);
  }
  return newArray;
}
// console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 2, 8, 1, 4, 11])); // [ 1, 3, 2, 8, 5, 4, 11 ]
console.log(
  sortArray([
    47, -30, 31, 43, -44, -31, 15, -3, -40, -49, 20, -4, -14, 23, -48, 18, -49,
    -11, -36,
  ])
); //[ -32, 44, 26, 34, -47, 4, -4, -20, 4, 6, 50, -28, -35, -24, -9, -1, 17 ]
