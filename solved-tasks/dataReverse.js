function dataReverse(data) {
  let reverseArray = [];
  while (data.length > 0) {
    reverseArray.unshift(data.splice(0, 8));
  }
  return reverseArray.flat(Infinity);
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
); //  [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1])); // [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
