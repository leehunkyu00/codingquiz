

function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
        console.log(res);
    }

    return res;
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {

    let statDict = [];
    const arrLength = arr.length;
    for (let i = 0, idx = -1; i < arrLength; i++) {
        const key = arr[i];
        if (statDict[idx] === undefined || statDict[idx]["key"] !== arr[i]) {
            idx++;
            statDict[idx] = {key, count: 1};
        }
        else if (statDict[idx]["key"] === arr[i]) {
            statDict[idx]["count"] += 1;
        }
    }

    if (statDict.length === 1 && r === 1) {
        const r = 3;
        const n = statDict[0]["count"];

        return parseInt(n * (n - 1) * (n - 2) / 6);
    }

    let verify = 1;
    let startKey = 0;
    let result = 0;
    statDict.forEach( (item, index) => {

        const compValue = Math.pow(r, startKey + verify);
        if (compValue !== item["key"]) {
            verify = 1;
            if (item["key"] === 1) {
                startKey = 0;
            }
            else {
                startKey = item["key"] / r;
            }
        }
        else {
            verify = verify + 1;
        }


        if (verify >= 3 ) {
            result += statDict[index]["count"] *
                statDict[index - 1]["count"] *
                statDict[index - 2]["count"];
        }

    });


    return result;
}




//console.log("Result : ", countTriplets([1, 2, 2, 4], 2));            // 2
//console.log("Result : ", countTriplets([1, 3, 9, 9, 27, 81], 3));    // 6
//console.log("Result : ", countTriplets([1, 5, 5, 25, 125], 5));      // 4
//console.log("Result : ", countTriplets(new Array(100000).fill(1237), 1));      //
//console.log("Result : ", countTriplets([1, 5, 5, 25, 125, 1, 5, 5, 25, 125], 5));      // 8
