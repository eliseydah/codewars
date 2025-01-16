function calculateSubtraction(a, b) {
  if (b > a) {
    return b - a;
  }
}

let romanObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(roman) {
  let romanArray = roman.split("");
  let numberArray = [];
  for (let i = 0; i < romanArray.length; i++) {
    if (
      calculateSubtraction(romanObj[romanArray[i]], romanObj[romanArray[i + 1]])
    ) {
      numberArray.push(
        calculateSubtraction(
          romanObj[romanArray[i]],
          romanObj[romanArray[i + 1]]
        )
      );
      i++;
    } else {
      numberArray.push(romanObj[romanArray[i]]);
    }
  }
  return numberArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

console.log(solution("XXI")); //21
console.log(solution("IV")); // 4
console.log(solution("XIX"));
console.log(solution("MMVIII")); //2008
console.log(solution("MDCLXVI")); //   1666
console.log(solution("MCMLXXXVI")); // 1986

// Symbol    Value
// I          1
//V          5
// X          10
//L          50
//C          100
// D          500
// M          1,000
