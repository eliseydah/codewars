function domainName(url) {
  letSecondPart = "";
  if (url.includes("http://")) {
    url = url.replace("http://", "");
  }
  if (url.includes("https://")) {
    url = url.replace("https://", "");
  }
  if (url.includes("www.")) {
    url = url.replace("www.", "");
  }
  secondPart = url.indexOf(".");
  return url.slice(0, secondPart);
}

console.log(domainName("http://google.com"));
//google
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("8g0axt.fr/default.html"));
console.log(domainName(" https://www.yx8fmr4c3uulevmyks5m4k.jp/archive/"));

// let firstPart = "";
// letSecondPart = "";
// let begin = url.indexOf("//");
// if (begin === -1) {
//   firstPart = url.indexOf(".") + 1;
//   secondPart = url.indexOf(".", firstPart + 1);
// } else {
//   firstPart = begin + 2;
//   secondPart = url.indexOf(".");
// }
// return url.slice(firstPart, secondPart);
