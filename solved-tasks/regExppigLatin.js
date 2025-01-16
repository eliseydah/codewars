function pigIt(str) {
  let newArray = str.split(" ");
  let finalArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (!newArray[i].match(/([a-zA-Z]|\d)/gm)) {
      finalArray.push(newArray[i]);
      continue;
    }
    let a = newArray[i][0];

    finalArray.push(`${newArray[i].replace(newArray[i][0], "")}${a}ay`);
  }
  return finalArray.join(" ");
}

console.log(pigIt("O tempora o mores ?"));
//Oay emporatay oay oresmay !
