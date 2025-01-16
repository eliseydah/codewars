function solution(string) {
  let newArray = string.split("");
  let finalArray = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].match(/([A-Z])/gm)) {
      finalArray.push(" ", newArray[i]);
    } else {
      finalArray.push(newArray[i]);
    }
  }
  return finalArray.join("");
}
console.log(solution("camelCasing")); //camel Casing
console.log(solution("camelCasingTest")); // camel Casing Test
