function decodeMorse(seconds) {
  let map = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-.-.--": "!",
    "...---...": "SOS",
    ".-.-.-": ".",
  };
  let words = seconds.split("   ");

  console.log(words);

  let foo = words.map(function (item) {
    return item.split(" ");
  });

  let str = [];

  for (let i = 0; i < foo.length; i++) {
    let word = "";
    for (let j = 0; j < foo[i].length; j++) {
      //   console.log(foo[i][j]);
      if (map[foo[i][j]]) {
        word += map[foo[i][j]];
      }
    }

    if (word) {
      str.push(word);
    }
  }

  return str.join(" ");
}

console.log(
  decodeMorse(
    "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
  )
); //SOS
