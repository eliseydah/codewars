function incrementString(strng) {
  let numberGroups = strng.match(/\d+/g);

  // find our number group
  let numString = numberGroups ? numberGroups[numberGroups.length - 1] : "";

  // find our letter group
  let letterPart = strng.slice(0, strng.lastIndexOf(numString));

  if (numString[0] === "0") {
    let nulls = numString.match(/0+/g);
    let numerPart = numString.replace(nulls[0], "");
    if (numerPart) {
      let NewDigitValue = Number(numerPart) + 1;
      if (NewDigitValue.toString().length === numerPart.length) {
        return letterPart !== null
          ? `${letterPart}${nulls[0]}${NewDigitValue}`
          : `${nulls[0]}${NewDigitValue}`;
      } else {
        let a = nulls[0].slice(0, -1);
        return letterPart !== null
          ? `${letterPart}${a}${NewDigitValue}`
          : `${a}${NewDigitValue}`;
      }
    } else {
      let newNulls = nulls.join("").slice(0, -1);
      return letterPart !== null
        ? `${letterPart}${newNulls + 1}`
        : `${newNulls + 1}`;
    }
  } else {
    let NewDigitValue = Number(numString) + 1;
    return letterPart !== null
      ? `${letterPart}${NewDigitValue}`
      : `${NewDigitValue}`;
  }
}
console.log(incrementString("foo", "fo99obar100"));
console.log(incrementString("1"));
console.log(incrementString("foobar999"));
console.log(incrementString("foo"));
console.log(incrementString("foobar0090"));
// let last = numString.length - 1;
// let newSumValue = Number(numString[last]) + 1;
// let NewDigitValue = numString.slice(0, -1) + newSumValue;
// return `${letterPart}${NewDigitValue}`;
