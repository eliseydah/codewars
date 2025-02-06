function arrayDiff(a, b) {
  if (b.length === 0 || a.length === 0) {
    return a;
  }
  for (let i = 0; i < b.length; i++) {
    while (a.includes(b[i])) {
      a.splice(a.indexOf(b[i]), 1);
    }
  }
  return a;
}

console.log(arrayDiff([1, 2], [1])); //[2], "a was [1,2], b was [1]"
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1],
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
