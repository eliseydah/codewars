function multiplicationTable(size) {
  let mainArray = [];
  let smallArray = [];
  for (let i = 1; i <= size; i++) {
    smallArray = [];
    for (let j = 1; j <= size; j++) {
      smallArray.push(i * j);
    }
    mainArray.push(smallArray);
  }
  return mainArray; // insert code here
}

console.log(multiplicationTable(3)); //  [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
console.log(multiplicationTable(2)); // [[1,2],[2, 4 ]]
