function towerBuilder(nFloors) {
  let asterisk = "*";
  let index = 1;
  let newArray = [];
  let finalArray = [];
  for (let i = 1; i <= nFloors; i++) {
    newArray.push(asterisk.repeat(index));
    index += 2;
  }
  // console.log(newArray[newArray.length - 1].length);
  // return newArray;
  for (let i = 0; i < newArray.length; i++) {
    let gap = " ";
    let indexGap = 0;

    indexGap = (newArray[newArray.length - 1].length - newArray[i].length) / 2;
    console.log(indexGap);
    finalArray.push(
      `${gap.repeat(indexGap)}${newArray[i]}${gap.repeat(indexGap)}`
    );
  }
  return finalArray;
  // build here
}
console.log(towerBuilder(1)); // ["*"]);
console.log(towerBuilder(2)); //[" * ","***"]);
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"])
console.log(towerBuilder(4));
