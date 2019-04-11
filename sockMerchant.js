let ar = [1, 2, 1, 2, 3, 3, 4, 6];

let sockDict = {};
let res = 0;

ar.forEach(function (elements) {
    if (elements in sockDict) {
        // exist sock
        sockDict[elements] += 1;
    } else {
        // not exist sock
        sockDict[elements] = 1;
    }
})

console.log(sockDict);
for (let key in sockDict) {

    console.log(sockDict[key], " => ", ~~(sockDict[key]/2));
    res = res + sockDict[key] / 2;
}

console.log(res);

// return sockDict.filter(function (x) { return x >= 2 }).length
