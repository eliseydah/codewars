function findOutlier(integers) {
  let chetny = [];
  let nechetny = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] === 0) {
      chetny.push(integers[i]);
    }
    if (integers[i] % 2) {
      nechetny.push(integers[i]);
    } else {
      chetny.push(integers[i]);
    }
  }
  return chetny.length > nechetny.length ? nechetny[0] : chetny[0];
}
console.log(findOutlier([0, 1, 2])); //1
console.log(findOutlier([1, 2, 3])); //2
console.log(findOutlier([2, 6, 8, 10, 3])); //3
