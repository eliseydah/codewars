function expandedForm(num) {
  let newString = "";
  let finalArray = [];
  let newArray = num.toString().split("");
  for (let i = 0; i < newArray.length; i++) {
    let a = newArray.length - i - 1;
    if (newArray[i] !== "0") {
      finalArray.push(newArray[i] * Math.pow(10, a));
    }
  }

  return finalArray.join(" + ");
}
console.log(expandedForm(12)); // "10+2"
console.log(expandedForm(42)); // "40+2"
console.log(expandedForm(70304)); // "70000 + 300 + 4"
console.log(expandedForm(12));
