const readline = require("readline");

// обёртка для ввода
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
};
// class Lotto {

// }

// function validateNames(name) {
//   if (name.length > 5) {
//     throw new Error("Имя должно быть менее 5 символов");
//   }
//   if (name === "") {
//     throw new Error("Имя не должно быть пустой строкой");
//   }
// }

// function race() {

// }
function getNumberOfTickets(sum) {
  return Math.floor(sum / 1000);
}
function validateNumber(number) {
  if (Number(number) > 45 || Number(number) < 1) {
    throw new Error("Lotto numbers must be between 1 and 45.");
  }
}
function validateNumbersArrayLength(arr) {
  if (arr.length !== 6) {
    throw new Error("You need to write 6 comma-separated numbers");
  }
}
function createLotteryTicket() {
  let num = [];
  do {
    let generateNumber = Math.floor(Math.random() * 45) + 1;
    if (!num.includes(generateNumber)) num.push(generateNumber);
  } while (num.length < 6);
  let sorted = num.sort((a, b) => {
    return a - b;
  });
  return sorted;
}
function findMatch(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let commonLength = arr1[i].filter((value) => arr2.includes(value));
    console.log(commonLength.length);
  }
}
async function lotto() {
  try {
    const moneyForTickets = await askQuestion(
      "Please enter the purchase amount.\n"
    );
    let numberOfTickets = getNumberOfTickets(moneyForTickets);
    let allUserTickets = [];
    console.log(`You have purchased ${numberOfTickets} tickets.`);

    for (let i = 0; i < numberOfTickets; i++) {
      const ticket = createLotteryTicket();
      console.log(ticket);
      allUserTickets.push(ticket);
    }
    const winNumbers = await askQuestion(
      "Please enter last week's winning numbers.\n"
    );
    let winNumbersArray = winNumbers.split(",");
    validateNumbersArrayLength(winNumbersArray);
    winNumbersArray.forEach(validateNumber);
    const bonusNumber = await askQuestion("Please enter the bonus number.\n");
    validateNumber(bonusNumber);

    console.log("Winning Number");
    console.log("---");
    findMatch(allUserTickets, winNumbers);
  } catch (error) {
    console.error("Что-то пошло не так", error);
  }
}

lotto();
