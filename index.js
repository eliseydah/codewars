function inArray(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i]) && !newArray.includes(array1[i])) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray.sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); //  ["live", "strong"]
console.log(
  inArray(
    ["live", "strong", "arp"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
// function insertionSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     let numToIns = nums[i];
//     let j;
//     for (j = i - 1; nums[j] > numToIns && j >= 0; j--) {
//       nums[j + 1] = nums[j];
//       console.log(nums);
//     }
//     nums[j + 1] = numToIns;
//   }
//   return nums;
// }

// console.log(insertionSort([3, 7, 4, 11, 2, 5, 1, 8])); //
