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

function createLotteryTicket() {
  let num = [];
  for (let i = 0; i < 6; i++) {
    num.push(Math.floor(Math.random() * 45) + 1);
  }
  let sorted = num.sort((a, b) => {
    return a - b;
  });
  return sorted;
}
async function racing() {
  try {
    const moneyForTickets = await askQuestion("Введите сумму покупки: ");
    console.log(moneyForTickets);
    let numberOfTickets = getNumberOfTickets(moneyForTickets);
    let allUserTickets = [];
    console.log(`You have purchased ${numberOfTickets} tickets.`);

    for (let i = 0; i < numberOfTickets; i++) {
      const ticket = createLotteryTicket();
      console.log(ticket);
      allUserTickets.push(ticket);
    }
  } catch (error) {
    console.error("Что-то пошло не так", error);
  }
}

racing();
