
function riddle1(arr) {
    // solve here

    const arrSize = arr.length;
    let resArr = [];
    let stackList = new Array(arrSize);

    for (let i = 0; i < arrSize; i++) {
        let windowSize = i + 1;
        let max = 0;
        for (let j = 0; j + i < arrSize; j++) {
            const windowArr = arr.slice(j, j + windowSize);
            const min = Math.min(...windowArr);
            if (min > max) {
                max = min;
            }
        }
        resArr.push(max);
    }
    return resArr;
}

function riddle(arr) {
    // solve here

    const arrSize = arr.length;
    //let stackList = [...new Array(arrSize).keys()].map(x => []);
    let stackList = new Array(arrSize);
    console.log(stackList);
    let resArr = [];

    for (let i = 0; i < arrSize; i++) {
        let max = 0;
        for (let j = 0; j + i < arrSize; j++) {
        }
        resArr.push(max);
    }
    return resArr;
}
const data1 = [1, 2, 3, 5, 1, 13, 3];
const data2 = [2, 6, 1, 12];

console.log(riddle(data1));


