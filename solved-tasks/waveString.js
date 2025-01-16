function wave(str) {
  if (str === "") {
    return [];
  }
  let waveArray = [];
  for (let i = 0; i < str.length; i++) {
    let newArray = str.split("");
    if (newArray[i] === " ") {
      continue;
    }
    newArray.splice(i, 1, newArray[i].toUpperCase());
    waveArray.push(newArray.join(""));
    // console.log(str.replace(str[i], str[i].toUpperCase()));
    // waveArray.push(str.replace(str[i], str[i].toUpperCase()));
  }
  return waveArray;
}

console.log(wave("hello")); // [Hello hEllo]
console.log(wave(" gap "));
