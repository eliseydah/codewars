const eyes = [";", ":"];
const noses = ["-", "~"];
const smiles = [")", "D"];

function foundSmile(item) {
  // for (let i = 0; i < item.length; i++)
  if (item.length < 2 || item.length > 3) {
    return false;
  }
  if (item.length === 3) {
    if (!eyes.includes(item[0])) {
      return false;
    }
    if (!noses.includes(item[1])) {
      return false;
    }
    if (!smiles.includes(item[2])) {
      return false;
    }
  }
  if (item.length === 2) {
    if (!eyes.includes(item[0])) {
      return false;
    }
    if (!smiles.includes(item[1])) {
      return false;
    }
  }
  return true;
}

function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let smileArray = arr.filter(foundSmile);
  return smileArray.length;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); //2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); //1
// console.log(countSmileys([]));
//valid :) :D ;-D :~)
