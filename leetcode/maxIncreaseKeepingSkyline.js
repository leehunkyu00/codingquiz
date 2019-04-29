// 807. Max Increase to Keep City Skyline
// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    console.log(grid);

    let colMaxArr = [];
    let rowMaxArr = [];
    let sum = 0;

    // get origin sum
    grid.forEach((arr) => {
        sum += arr.reduce((prev, curr) => {
            return prev - curr;
        }, 0)
    })

    // get col, row max array
    for (let i = 0; i < grid.length; i++) {
        let rowMax = 0;
        let colMax = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] > rowMax) {
                rowMax = grid[i][j];
            }

            if (grid[j][i] > colMax) {
                colMax = grid[j][i];
            }
        }

        rowMaxArr.push(rowMax);
        colMaxArr.push(colMax);
    }

    // change grid array by max arr
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[i][j] = colMaxArr[j] > rowMaxArr[i] ? rowMaxArr[i] : colMaxArr[j];
        }
    }

    // retry sum grid array
    grid.forEach((arr) => {
        sum += arr.reduce((prev, curr) => {
            return prev + curr;
        }, 0)
    })

    return sum;
};

maxIncreaseKeepingSkyline(
    [[3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]]);