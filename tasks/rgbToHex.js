// function rgb(r, g, b) {
//   return "FFFFFF";
// }

function foo(number) {
  switch (number) {
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
    default:
      return number;
  }
}

function convertToHex(num) {
  if (num > 255) {
    return "FF";
  }
  if (num < 0) {
    return "00";
  }
  let newArray = [];
  let a = num;
  let b = num;
  do {
    a = b % 16;
    b = Math.floor(b / 16);
    newArray.push(foo(a));

    if (!Math.floor(b / 16)) {
      newArray.push(foo(b));
    }
  } while (Math.floor(b / 16));
  return newArray.reverse().join("");
}
function rgb(r, g, b) {
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}
// console.log(convertToHex(147));
// console.log(convertToHex(173));
// console.log(convertToHex(211));
// console.log(convertToHex(1000));
console.log(rgb(173, 255, 47));
console.log(rgb(0, 0, 0));
console.log(rgb(300, 255, 255));
// console.log(foo(255));
// console.log(nine(plus(five())));
// console.log(eight(dividedBy(seven())));
// console.log(seven(minus(five())));
// console.log(six(dividedBy(two())));

// while (Math.floor(a / 16)) {
//   let b = Math.floor(a / 16);
//   a = a % 16;
//   if (a > 15) {
//     a = 15;
//   }
//   switch (a) {
//     case 10:
//       a = "A";
//       break;
//     case 11:
//       a = "B";
//       break;
//     case 12:
//       a = "C";
//       break;
//     case 13:
//       a = "D";
//       break;
//     case 14:
//       a = "E";
//       break;
//     case 15:
//       a = "F";
//       break;
//     default:
//       break;
//   }

//   newArray.push(a);
// }
