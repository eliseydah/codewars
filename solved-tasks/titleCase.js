function titleCase(title, minorWords) {
  if (title === "") {
    return title;
  }
  let newArray = title.toLowerCase().split(" ");
  let finalArray = [];
  finalArray.push(
    (newArray[0] = newArray[0].replace(
      newArray[0][0],
      newArray[0][0].toUpperCase()
    ))
  );
  for (let i = 1; i < newArray.length; i++) {
    if (
      minorWords &&
      minorWords.toLowerCase().split(" ").includes(newArray[i])
    ) {
      finalArray.push(newArray[i]);
    } else {
      finalArray.push(
        (newArray[i] = newArray[i].replace(
          newArray[i][0],
          newArray[i][0].toUpperCase()
        ))
      );
    }
  }
  return finalArray.join(" ");
}

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
