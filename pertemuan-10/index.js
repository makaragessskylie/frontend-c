// Rest and Spread Operator

const penjumlahanArray = (a, b, c, d, e) => {
  const array = [a, b, c, d, e];
  let total = 0;
  array.forEach((item)) {
    total = total + item;
  };
  console.log(total);
};