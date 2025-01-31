function bouncingBall(h, bounce, window) {
  let ballBounce = 0;
  let high = h;
  if (h > 0 && window < h && bounce > 0 && bounce < 1) {
    while (high * bounce > window) {
      high = high * bounce;
      ballBounce += 2;
    }
    ballBounce += 1;
    return ballBounce;
  } else return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(3.0, 1.0, 1.5)); // - 1
