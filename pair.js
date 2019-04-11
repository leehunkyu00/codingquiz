// ~~ is shorthand for Math.floor
let randoms = [...Array(100)].map(e => ~~(Math.random() * 1000));

let k = 2;
let arr = randoms.filter(function(item, pos) {
  return randoms.indexOf(item) == pos;
});

// TODO here
let count = 0;
let target;

arr.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < arr.length; i++) {
  target = arr[i];
  for (let j = i; j < arr.length; j++) {
    if (arr[j] - target == k) {
      count++;
      break;
    }
  }
}

console.log(count);
