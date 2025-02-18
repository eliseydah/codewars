function parse(data) {
  let originalArray = data.split("");
  let newArray = [];
  let initialValue = 0;
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] === "i") {
      initialValue += 1;
    }
    if (originalArray[i] === "d") {
      initialValue -= 1;
    }
    if (originalArray[i] === "s") {
      initialValue = initialValue * initialValue;
    }
    if (originalArray[i] === "o") {
      newArray.push(initialValue);
    }
  }
  return newArray;
}

console.log(parse("iiisdoso")); // [8,64]
console.log(parse("iiisdosodddddiso")); // [8, 64, 3600]
