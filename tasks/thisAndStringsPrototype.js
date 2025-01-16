String.prototype.camelCase = function () {
  console.log(this);
  if (this.toString() === "") {
    return this.toString();
  } else {
    let newArr = this.split(" ");
    let finalString = "";
    let finalArray = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === "") {
        continue;
      } else {
        finalArray.push(
          newArr[i].replace(newArr[i][0], newArr[i][0].toUpperCase())
        );
      }
    }
    finalString = finalArray.join("");
    return finalString;
  }
};
// console.log("test case".camelCase());
// console.log("camel Case method".camelCase());
// console.log("say hello".camelCase());
console.log("".camelCase());
