// https://www.hackerrank.com/challenges/candies/problem

// Complete the candies function below.
function candies(n, arr) {

    let candyArr = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i-1]) {
            candyArr[i] = candyArr[i - 1] + 1;
        }
    }

    for (let i = n - 1; i > 0; i--) {
        if (arr[i - 1] > arr[i]) {
            candyArr[i - 1] = Math.max(candyArr[i - 1], candyArr[i] + 1);
        }
    }

    return candyArr.reduce((acc, val) => {
        return acc + val
    }, 0);
}

console.log(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));