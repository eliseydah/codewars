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
class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }
  move() {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber >= 4) {
      this.distance += "-";
    }
  }
}

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

function race(names, counter) {
  const cars = names.map((name) => {
    return new Car(name);
  });

  for (let i = 0; i < counter; i++) {
    cars.forEach((car) => car.move());
    cars.forEach((car) =>
      console.log(`${car.name.padEnd(5)}: ${car.distance}`)
    );
    console.log();
  }
  let maxLenght = null;
  let maxValue = "";

  cars.forEach((car) => {
    if (car.distance.length > maxLenght) {
      maxLenght = car.distance.length;
      maxValue = car.distance;
    }
  });

  let winner = cars.filter((car) => {
    return car.distance === maxValue;
  });

  console.log(
    `Winners: ${winner.map((item) => {
      return item.name;
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
