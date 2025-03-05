var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSequence([])); //0
