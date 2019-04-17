// [1 -> 2 -> 3]
function runUpOrder(inArr) {

    let arr = [...inArr]
    let count = 0;
    for(let i = 0; i < arr.length; i += 1) {
        let value = i + 1;
        let swapIdx = -1;
        let tmp;
        if (value === arr[i]) continue;

        count += 1;

        // found collect value index
        for (swapIdx = i + 1; swapIdx < arr.length; swapIdx += 1) {
            if (arr[swapIdx] === value) break;
        }

        //console.log(arr, " : ", i , " <=> ", swapIdx);
        tmp = arr[i];
        arr[i] = arr[swapIdx];
        arr[swapIdx] = tmp;

    }

    return count;
}

// [1 <- 2 <- 3]
function runDownOrder(inArr) {

    let arr = [...inArr]
    let count = 0;
    for(let i = arr.length - 1; i >= 0; i -= 1) {
        let value = i + 1;
        let swapIdx = -1;
        let tmp;
        if (value === arr[i]) continue;

        count += 1;

        // found collect value index
        for (swapIdx = i - 1; swapIdx >= 0; swapIdx -= 1) {
            if (arr[swapIdx] === value) break;
        }

        tmp = arr[i];
        arr[i] = arr[swapIdx];
        arr[swapIdx] = tmp;

    }

    return count;
}

function minimumSwaps(arr) {

    let res1 = runUpOrder(arr);
    let res2 = runDownOrder(arr);

    if (res1 > res2)
        return res2;
    else
        return res1;
}

let testArray1 = [7, 1, 3, 2, 4, 5, 6]; // 3
let testArray2 = [2, 3, 4, 1, 5];     // 3
let testArray3 = [1, 3, 5, 2, 4, 6, 7]; // 3

console.log("result :",minimumSwaps(testArray1));
//console.log("result :",minimumSwaps(testArray2));
//console.log("result :",minimumSwaps(testArray3));
