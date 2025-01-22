function toWeirdCase(string) {
  let newArray = string.split(" ");
  let finalArray = [];
  for (let i = 0; i < newArray.length; i++) {
    finalArray.push(foo(newArray[i]));
  }
  return finalArray.join(" ");
}
function foo(item) {
  let localArray = item.split("");
  let changedArray = [];
  for (let i = 0; i < localArray.length; i++) {
    if (i % 2 || i === 1) {
      changedArray.push(localArray[i].toLowerCase());
    } else {
      changedArray.push(localArray[i].toUpperCase());
    }
  }
  return changedArray.join("");
}
console.log(toWeirdCase("This is a test")); //'ThIs Is A TeSt'
console.log(toWeirdCase("UPPER CASE")); //'UpPeR CaSe'
console.log(toWeirdCase("lower case")); //  'LoWeR CaSe'
