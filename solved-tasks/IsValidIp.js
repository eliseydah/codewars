function isValidIP(str) {
  console.log(str);
  let newArray = str.split(".");
  const regex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
  if (newArray.length === 4) {
    for (let i = 0; i < newArray.length; i++) {
      if (
        !(
          (Number(newArray[i]) === 0 && newArray[i].length === 1) ||
          regex.test(newArray[i])
        )
      ) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isValidIP("0.0.0.0")); // true
console.log(isValidIP("123.456.789.0")); // true
console.log(isValidIP("137.255.156.100")); //true
console.log(isValidIP("137.255.156.100")); // true

console.log(isValidIP("abc.def.ghi.jkl")); // false
console.log(isValidIP("1e0.1e1.1e2.2e2")); // false
console.log(isValidIP("123.456.789.0")); // false
