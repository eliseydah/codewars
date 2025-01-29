function deleteNth(arr, n) {
  let uniqueArray = [];
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (newObj[arr[i]]) {
      newObj[arr[i]] += 1;
      if (newObj[arr[i]] <= n) {
        uniqueArray.push(arr[i]);
      }
    } else {
      newObj[arr[i]] = 1;
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(deleteNth([20, 37, 20, 21], 1)); //20 37 21
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1)); // [12,39,19], 1
