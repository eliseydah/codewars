function isItPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function isPrime(num) {
  if (isItPrime(num)) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
console.log(isPrime(75));
console.log(isPrime(73));
