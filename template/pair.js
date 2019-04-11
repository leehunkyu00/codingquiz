// ~~ is shorthand for Math.floor
let randoms = [...Array(100)].map(e=>~~(Math.random()*1000));

let k = 2;
let arr = randoms.filter(function(item, pos) {
    return randoms.indexOf(item) == pos;
})

let count = 0;

// TODO here


console.log(count);
