function twoSum(numbers, target) {
  let indexArray = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        indexArray.push(i);
        indexArray.push(j);
      }
    }
  }
  return indexArray;
}

console.log(twoSum([1, 2, 3], 4)); //
console.log(twoSum([3, 2, 4], 6)); //
