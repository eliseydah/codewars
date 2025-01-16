// function allSquaredPairs(num) {
//   let numbersArray = [];
//   for (let i = 0; i <= num; i++) {
//     let a = Math.pow(i, 2);
//     for (let j = 0; j <= num; j++) {
//       let b = Math.pow(j, 2);
//       if (a + b === num && b >= a) {
//         numbersArray.push([i, j]);
//       }
//     }
//   }
//   return numbersArray;
// }
function allSquaredPairs(num) {
  let numbersArray = [];
  for (let i = 0; i <= Math.sqrt(num / 2); i++) {
    let a = Math.pow(i, 2);

    let b = Math.floor(Math.sqrt(num - a));

    if (a + b * b === num) numbersArray.push([i, b]);
  }
  return numbersArray;
}

// console.log(allSquaredPairs(0));
console.log(allSquaredPairs(10));
// console.log(allSquaredPairs(2));
// console.log(allSquaredPairs(25));
// console.log(allSquaredPairs(325));

// 0  -->  [ [0, 0] ]
// 1  -->  [ [0, 1] ]
// 2  -->  [ [1, 1] ]
// 3  -->  []
// 4  -->  [ [0, 2] ]
// 5  -->  [ [1, 2] ]
// max(num) === 2147483647
