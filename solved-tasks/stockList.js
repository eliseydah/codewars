function stockList(books, categories) {
  let finalObj = {};
  for (let i = 0; i < categories.length; i++) {
    finalObj[categories[i]] = 0;
  }

  for (let i = 0; i < books.length; i++) {
    let newArr = books[i].split(" ");
    if (categories.includes(newArr[0][0])) {
      finalObj[newArr[0][0]] += Number(newArr[1]);
    }
  }
  let finalarray = [];
  for (key in finalObj) {
    finalarray.push(`(${key} : ${finalObj[key]})`);
  }

  return finalarray.join(" - ");
}
console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
); //  "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]
  )
); //    "(A : 200) - (B : 1140)"
