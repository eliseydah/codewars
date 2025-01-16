function persistence(num) {
  let persValue = num;
  let counter = 0;
  let a = 0;
  if (num < 10) {
    return counter;
  }
  do {
    let hui = 1;
    let b = persValue.toString().split("");
    for (let i = 0; i < b.length; i++) {
      hui *= b[i];
    }
    persValue = hui;
    a = hui;
    counter++;
  } while (a >= 10);
  return counter;
}
// for (let i = 0; 0 < b.length; i++) {
//   persValue *= b[i];
//   a = persValue;
//   counter++;
// }
// if (b.length === 7) {
//   persValue = b[0] * b[1] * b[2] * b[3] * b[4];
//   a = persValue;
//   counter++;
// }
// if (b.length === 3) {
//   persValue = b[0] * b[1] * b[2];
//   a = persValue;
//   counter++;
// }
// if (b.length === 2) {
//   persValue = b[0] * b[1];
//   a = persValue;
//   counter++;
// }
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999)); //1
console.log(persistence(3901765));
