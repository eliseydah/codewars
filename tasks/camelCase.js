function toCamelCase(str) {
  let newArray = [];
  let finalArray = [];
  // newArray = str.replaceAll("_", " ").replaceAll("-", " ").split(" ");
  newArray = str.split(/-|_/);
  finalArray.push(newArray[0]);
  for (let i = 1; i < newArray.length; i++) {
    finalArray.push(
      newArray[i].replace(newArray[i][0], newArray[i][0].toUpperCase())
    );
  }
  return finalArray.join("");
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
