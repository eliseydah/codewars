function solution(number) {
  let strNum = number.toString().split("");
  function translateNumber(numberArr, a, b, c) {
    switch (numberArr) {
      case "1":
        return a;
        break;
      case "2":
        return a + a;
        break;
      case "3":
        return a + a + a;
        break;
      case "4":
        return a + b;
        break;
      case "5":
        return b;
        break;
      case "6":
        return b + a;
        break;
      case "7":
        return b + a + a;
        break;
      case "8":
        return b + a + a + a;
        break;
      case "9":
        return a + c;
        break;
      default:
        return "";
    }
  }
  switch (strNum.length) {
    case 1:
      return translateNumber(strNum[0], "I", "V", "X");
      break;
    case 2:
      return (
        translateNumber(strNum[0], "X", "L", "C") +
        translateNumber(strNum[1], "I", "V", "X")
      );
      break;
    case 3:
      return (
        translateNumber(strNum[0], "C", "D", "M") +
        translateNumber(strNum[1], "X", "L", "C") +
        translateNumber(strNum[2], "I", "V", "X")
      );
      break;
    case 4:
      let num = "";
      for (let i = 0; i < strNum[0]; i++) {
        num += "M";
      }
      return (
        num +
        translateNumber(strNum[1], "C", "D", "M") +
        translateNumber(strNum[2], "X", "L", "C") +
        translateNumber(strNum[3], "I", "V", "X")
      );
      break;
    default:
      return "";
  }
}

console.log(solution(10));
// MCMXC', '1990 should, "MCMXC"'
// console.log(solution(19));

// 'MMVII', '2007 should, "MMVII"'
console.log(solution(5));
console.log(solution(4390));

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
