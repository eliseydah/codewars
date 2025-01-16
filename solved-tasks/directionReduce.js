function dirReduc(arr) {
  let newArr = arr;
  let j = 0;
  do {
    j++;
    for (let i = 0; i < arr.length; i++) {
      if (
        (newArr[i] === "NORTH" && newArr[i + 1] === "SOUTH") ||
        (newArr[i] === "SOUTH" && newArr[i + 1] === "NORTH")
      ) {
        newArr.splice(i, 2);
      }
      if (
        (newArr[i] === "WEST" && newArr[i + 1] === "EAST") ||
        (newArr[i] === "EAST" && newArr[i + 1] === "WEST")
      ) {
        newArr.splice(i, 2);
      }
    }
  } while (j < 5);
  return newArr;
}
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) //west
);

// function compare(a, b) {
//   if ((a === "NORTH" && b === "SOUTH") || (a === "SOUTH" && b === "NORTH")) {
//     return false;
//   }
//   if ((a === "WEST" && b === "EAST") || (a === "EAST" && b === "WEST")) {
//     return false;
//   } else {
//     return true;
//   }
// }
