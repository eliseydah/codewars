function generateHashtag(str) {
  let newArr = str.split(" ");
  let clearArray = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "") {
      continue;
    } else {
      clearArray.push(
        newArr[i].replace(newArr[i][0], newArr[i][0].toUpperCase())
      );
    }
  }
  console.log(clearArray.join("").length);
  if (clearArray.length > 0 && clearArray.join("").length <= 140) {
    let finalString = "#" + clearArray.join("");
    return finalString;
  } else {
    return false;
  }
}

console.log(generateHashtag(" tvoi hui ")),
  console.log(generateHashtag("    codewars is nice"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
