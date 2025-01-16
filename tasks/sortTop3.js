function topThreeWords(text) {
  let newStr = text
    .replace(/[^a-zA-Z|'|\s]/g, "")
    .replace(/(\s|^)'(\s+|$)/g, "");

  let newArray = newStr.toLowerCase().split(" ");
  let newObj = {};
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "") {
      continue;
    }
    if (newObj[newArray[i]]) {
      newObj[newArray[i]] += 1;
    } else {
      newObj[newArray[i]] = 1;
    }
  }

  let objToArr = [];
  objToArr = Object.entries(newObj);
  objToArr.sort((a, b) => b[1] - a[1]);
  filteredArray = objToArr.map((subArray) =>
    subArray.find((item) => typeof item === "string")
  );
  let finalArray = [];
  if (filteredArray.length > 3) {
    finalArray.push(filteredArray[0], filteredArray[1], filteredArray[2]);
  } else {
    finalArray = filteredArray;
  }
  return finalArray;
}

// console.log(
//   topThreeWords("a a a  b  c c  d d d d  e e e e e", ["e", "d", "a"])
// );
// console.log(topThreeWords("a a a c b b", ["a", "b", "c"]));
console.log(topThreeWords("  //wont won't won't "));

// assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
// assert.deepEqual(sumDigPow(10, 100),  [89])
// assert.deepEqual(sumDigPow(90, 100), [])

//  let hundreds = Math.floor(i / 100);
//       let tens = Math.floor((i % 100) / 10); // Извлекаем десятки
//       let ones = i % 10; // Извлекаем единицы
//       let number =
//         Math.pow(hundreds, 1) + Math.pow(tens, 2) + Math.pow(ones, 3);
//       if (i === number) {
//         newArray.push(number);
//       }
