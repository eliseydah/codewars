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

function validateRounds(rounds) {
  if (!Number.isInteger(Number(rounds))) {
    throw new Error("Число раундов должно быть целым числом");
  }
  if (Number(rounds) <= 0) {
    throw new Error("Число раундов не может быть 0 и менее");
  }
}

function validateNames(name) {
  if (name.length > 5) {
    throw new Error("Имя должно быть менее 5 символов");
  }
  if (name === "") {
    throw new Error("Имя не должно быть пустой строкой");
  }
}

function getCarPoints() {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber < 4) {
    return "";
  } else {
    return "-";
  }
}
function race(cars, counter) {
  const carsMap = {};

  for (let i = 0; i < cars.length; i++) {
    carsMap[cars[i]] = "";
  }

  for (let i = 0; i < counter; i++) {
    for (key in carsMap) {
      carsMap[key] += getCarPoints();
      console.log(`${key.padEnd(5)}: ${carsMap[key]}`);
    }
    console.log();
  }
  console.log();
  let maxLenght = null;
  let maxValue = "";

  for (key in carsMap) {
    if (carsMap[key].length > maxLenght) {
      maxLenght = carsMap[key].length;
      maxValue = carsMap[key];
    }
  }

  let winner = Object.entries(carsMap).filter(([key, value]) => {
    return value === maxValue;
  });

  console.log(
    `Winners: ${winner.map((item) => {
      return item[0];
    })}`
  );
}

async function racing() {
  try {
    const names = await askQuestion("Введите имена машин (через запятую): ");
    let namesArray = names.split(",");
    namesArray.forEach(validateNames);

    const rounds = await askQuestion("Введите число раундов:");
    validateRounds(rounds);
    console.log("Race results \n");
    race(namesArray, rounds);
  } catch (error) {
    console.error("Что-то пошло не так", error);
  }
}

racing();
