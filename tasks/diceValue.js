function score(dice) {
  let newObj = {};
  for (let i = 0; i < dice.length; i++) {
    if (newObj[dice[i]]) {
      newObj[dice[i]] += 1;
    } else {
      newObj[dice[i]] = 1;
    }
  }
  let dice3 = 0;
  let diceValue = 0;
  for (let key in newObj) {
    if (newObj[key] < 3) {
      if (key === "1" || key === "5") {
        key === "1"
          ? (diceValue += newObj[key] * 100)
          : (diceValue += newObj[key] * 50);
      }
      continue;
    } else {
      if (key === "1") {
        diceValue += (newObj[key] % 3) * 100;
      }
      if (key === "5") {
        diceValue += (newObj[key] % 3) * 50;
      }
      dice3 = key;
    }
  }
  let sum = dice3 === "1" ? dice3 * 1000 + diceValue : dice3 * 100 + diceValue;
  return sum;
}
console.log(score([1, 1, 1, 3, 1]));
console.log(score([2, 3, 4, 6, 2]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([5, 1, 3, 4, 1]));
// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// for (let key in newObj) {
//   // console.log(`Key: ${key}, Value: ${newObj[key]}`);
//   if (newObj[key] >= 3) {
//     if (newObj[key] % 3 && key === 1) {
//       console.log((diceValue += (newObj[key] % 3) * 100));
//     }
//     if (newObj[key] % 3 && key === 5) {
//       diceValue += (newObj[key] % 3) * 50;
//     }
//     dice3 = key;
//   } else {
//     continue;
//   }
// }
// let sum = (dice3 = 1 ? dice3 * 1000 + diceValue : dice3 * 100 + diceValue);
// console.log(sum);
// if (sum > 0) {
//   return sum;
// } else {
//   sum = dice;
// }
// return sum;
