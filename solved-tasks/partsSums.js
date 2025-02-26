function partsSums(ls) {
  if (ls.length === 0) {
    return [0];
  }
  let sumArray = [];
  let sumValue = ls;
  sumValue = ls.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  sumArray.push(sumValue);
  for (let i = 0; i < ls.length; i++) {
    sumValue = sumValue - ls[i];
    sumArray.push(sumValue);
  }

  return sumArray;
}
console.log(partsSums([0, 1, 3, 6, 10])); //  [20, 20, 19, 16, 10, 0]
console.log(partsSums([1, 2, 3, 4, 5, 6])); //[21, 20, 18, 15, 11, 6, 0]
