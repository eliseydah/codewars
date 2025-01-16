function factory(num) {
  return function fn(calc) {
    if (calc) {
      return calc(num);
    }
    return num;
  };
}
const zero = factory(0);
const one = factory(1);
const two = factory(2);
const three = factory(3);
const four = factory(4);
const five = factory(5);
const six = factory(6);
const seven = factory(7);
const eight = factory(8);
const nine = factory(9);

function plus(arg) {
  return function (foo) {
    return foo + arg;
  };
}
function times(arg) {
  return function (foo) {
    return foo * arg;
  };
}
function minus(arg) {
  return function (foo) {
    return foo - arg;
  };
}
function dividedBy(arg) {
  return function (foo) {
    return Math.floor(foo / arg);
  };
}

console.log(zero(plus(nine())));
// console.log(nine(plus(five())));
// console.log(eight(dividedBy(seven())));
// console.log(seven(minus(five())));
// console.log(six(dividedBy(two())));
