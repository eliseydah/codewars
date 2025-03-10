function goodVsEvil(good, evil) {
  let goodArray = good.split(" ");
  let evilArray = evil.split(" ");
  let goodSum = goodPower(goodArray);
  let evilSum = evilPower(evilArray);
  if (goodSum > evilSum) {
    return "Battle Result: Good triumphs over Evil";
  }
  if (evilSum > goodSum) {
    return "Battle Result: Evil eradicates all trace of Good";
  }
  if (goodSum === evilSum) {
    return "Battle Result: No victor on this battle field";
  }
}
function goodPower(arr) {
  let res =
    arr[0] * 1 +
    arr[1] * 2 +
    arr[2] * 3 +
    arr[3] * 3 +
    arr[4] * 4 +
    arr[5] * 10;
  return res;
}
function evilPower(arr) {
  let res =
    arr[0] * 1 +
    arr[1] * 2 +
    arr[2] * 2 +
    arr[3] * 2 +
    arr[4] * 3 +
    arr[5] * 5 +
    arr[6] * 10;
  return res;
}
// let goodSum = goodArray
// .map((item) => {
//   return Number(item);
// })
// .reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// let evilSum = evilArray
// .map((item) => {
//   return Number(item);
// })
// .reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(goodVsEvil("1 0 0 0 1 0", "0 0 0 0 0 1 0")); // good
// console.log(goodVsEvil("0 1 0 0 0 0", "1 0 0 0 0 0 0")); // equal
// console.log(goodVsEvil("1 1 1 1 1 1", "0 1 1 1 1 1 1")); // No victor on this battle field'

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1")); // 'Battle Result: Evil eradicates all trace of Good')
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0")); // 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0")); //'Battle Result: No victor on this battle field'
