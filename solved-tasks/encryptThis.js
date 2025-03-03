var encryptThis = function (text) {
  let array = text.split(" ");

  let encryptedArr = array.map((el) => {
    return changePlaces(el);
  });

  return encryptedArr.join(" ");
};

function changePlaces(item) {
  arr = item.split("");

  let newArr = arr.map((el, i) => {
    if (i === 0) {
      return arr[i].charCodeAt(0);
    }
    if (i === 1) {
      return arr[arr.length - 1];
    }
    if (i === arr.length - 1) {
      return arr[1];
    }

    return arr[i];
  });

  return newArr.join("");
}
console.log(encryptThis("hello"));
console.log(encryptThis("The less he spoke the more he heard")); // "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("less")); //"72olle"
console.log(encryptThis("good")); //"103doo"
console.log(encryptThis("A wise old owl lived in an oak")); // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
// поменять местами вторую букву и последнюю
// первую заменить на цифру
