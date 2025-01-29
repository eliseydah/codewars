function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  if (array1.length === array2.length) {
    let arr1 = array1;
    let arr2 = array2;
    for (let i = 0; i < array1.length; i++) {
      if (!arr2.includes(arr1[i] * arr1[i])) {
        return false;
      } else {
        arr2.splice(array2.indexOf(arr1[i] * arr1[i]), 1);
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
); // true
console.log(comp([2, 2, 3], [4, 9, 9])); // false
