function highestRank(arr) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (newObj[arr[i]]) {
      newObj[arr[i]] += 1;
    } else {
      newObj[arr[i]] = 1;
    }
  }
  const sortedEntries = Object.entries(newObj).sort((a, b) => a[1] - b[1]);
  return Number(sortedEntries[sortedEntries.length - 1][0]);
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); //12

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); //3

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     // сдвигаем элементы вправо
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }
//   return arr;
// }
// console.log(insertionSort([2, 5, 7, 1, 8, 3, 4, 6]));
