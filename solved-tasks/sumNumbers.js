function calculateSum(n) {
  let finalSum = 0;
  let a = n.toString().split("");
  for (let i = 0; i < a.length; i++) {
    finalSum += Number(a[i]);
  }
  return finalSum;
}
function digitalRoot(n) {
  let newValue = n;
  do {
    newValue = calculateSum(newValue);
  } while (newValue >= 10);
  return newValue;
}

console.log(digitalRoot(16));
console.log(digitalRoot(493193));
