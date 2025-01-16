function getWeight(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += Number(str[i]);
  }
  return num;
}

function orderWeight(strng) {
  let newArray = strng.split(" ");

  newArray.sort(function (a, b) {
    if (getWeight(a) > getWeight(b)) {
      return 1;
    }
    if (getWeight(a) < getWeight(b)) {
      return -1;
    }

    return a.localeCompare(b);
  });

  return newArray.join(" ");
}

console.log(orderWeight("103 4444 123 2000 99")); // 99 103 4444
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
//"2000 10003 1234000 44444444 9999 11 11 22 123"
// console.log(getWeight("555")); // 15
// console.log(getWeight("599")); // 23

// "2000 103 123 4444 99"

// function alphanumeric(string) {
//   let hui = string.match(/([a-zA-Z]|\d)/gm);
//   if (hui && hui.length === string.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(alphanumeric(" "));
// console.log(alphanumeric("Mazinkaiser"));
// console.log(alphanumeric("hello world_"));
// console.log(alphanumeric("PassW0rd"));
