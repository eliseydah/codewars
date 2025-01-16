function isWalidWork(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let map = {};
  for (let i = 0; i < walk.length; i++) {
    if (!map[walk[i]]) {
      map[walk[i]] = 1;
    } else {
      map[walk[i]] += 1;
    }
  }
  if (map.n === map.s && map.w === map.e) {
    return true;
  } else {
    return false;
  }
}

console.log(isWalidWork(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isWalidWork(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isWalidWork(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
