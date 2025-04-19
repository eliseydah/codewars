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
function showCarNames(arr, counter) {
  for (let i = 0; i < counter; i++) {
    console.log(arr);
  }
}
async function racing() {
  try {
    const names = await askQuestion("Введите имена машин (через запятую): ");
    console.log(names);
    let namesArray = names.split(",");
    namesArray.forEach(validateNames);
    console.log(namesArray);
    const rounds = await askQuestion("Введите число раундов:");
    console.log(rounds);
    validateRounds(rounds);
    showCarNames(namesArray, rounds);
  } catch (error) {
    console.error("Что-то пошло не так", error);
  }
  // console.log("Artem");
}

racing();

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     // сдвигаем элементы вправо
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }
//   return arr;
// }
// console.log(insertionSort([2, 5, 7, 1, 8, 3, 4, 6]));
