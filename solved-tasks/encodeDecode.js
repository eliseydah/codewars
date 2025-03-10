function encode(string) {
  let newString = string
    .replaceAll("a", "1")
    .replaceAll("e", "2")
    .replaceAll("i", "3")
    .replaceAll("o", "4")
    .replaceAll("u", "5");

  return newString;
}

function decode(string) {
  return string
    .replaceAll("1", "a")
    .replaceAll("2", "e")
    .replaceAll("3", "i")
    .replaceAll("4", "o")
    .replaceAll("5", "u");
}

console.log(encode("hello"));
console.log(encode("How are you today?"));
console.log(encode("This is an encoding test."));
console.log(decode("h2ll4"));
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
