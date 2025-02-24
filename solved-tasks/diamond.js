function diamond(n) {
  let newArr = ["*"];
  let newStr = "*";
  let middle = (n + 1) / 2;
  // console.log(middle);
  // let asterisk = "";
  if (n % 2 && n > 0) {
    for (let i = 2; i <= n; i++) {
      if (i <= middle) {
        newArr.push((newStr += "**"));
      } else {
        newStr = newStr.replace("**", "");
        newArr.push(newStr);
      }
    }
    let finalStr = "";
    // console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
      let a;
      if (i < middle - 1) {
        a = middle - 1 - i;
      } else {
        a = i - (middle - 1);
      }
      // console.log(a);
      finalStr += `${createGap(a)}${newArr[i]}\n`;
    }
    return finalStr;
  } else {
    return null;
  }
}

function createGap(n) {
  gap = "";
  for (let i = 0; i < n; i++) {
    gap += " ";
  }
  return gap;
}
console.log(diamond(1)); //  "*\n"
console.log(diamond(3)); // " *\n***\n *\n"
console.log(diamond(5)); // "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(-3));
