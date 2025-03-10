function validPhoneNumber(phoneNumber) {
  let arr = phoneNumber.replace("-", ",").replace(" ", ",").split(",");
  console.log(arr[0].length);
  if (
    arr.length === 3 &&
    arr[0].length === 5 &&
    arr[1].length === 3 &&
    arr[2].length === 4
  ) {
    return true;
  } else {
    return false;
  }

  //TODO: Return whether phoneNumber is in the proper form
}

console.log(validPhoneNumber("(123) 456-7890")); // true
console.log(validPhoneNumber("(1111)555 2345")); // false
console.log(validPhoneNumber("(098) 123 4567")); //false
