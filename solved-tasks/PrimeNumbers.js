function isPrime(number) {
  if (number < 2) return false;

  for (let j = 2; j < number; j++) {
    if (!(number % j)) {
      return false;
    }
  }

  return true;
}

function prime(num) {
  let finalArray = [];
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      finalArray.push(i);
    }
  }
  return finalArray;
}
// console.log(prime(0));
// console.log(prime(1));
console.log(prime(11));
console.log(prime(23));
console.log(prime(39));
