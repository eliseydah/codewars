function cakes(recipe, available) {
  let newArray = [];
  for (keys in recipe) {
    if (recipe[keys] > available[keys] || available[keys] === undefined) {
      return 0;
    } else {
      newArray.push(Math.floor(available[keys] / recipe[keys]));
    }
  }
  newArray.sort((a, b) => a - b);
  return newArray.length > 1 ? newArray[0] : 0;
}

//recipe - сколько нужно
// сколько есть

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); //return 2
recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)); //0
