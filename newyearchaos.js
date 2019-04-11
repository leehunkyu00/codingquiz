
function minimumBribes(q) {
    let arr = [...Array(q.length).keys()].map(x => x + 1)
    let count = 0;
    let arrSize = arr.length;

    for (let i = arrSize - 1; i >= 0; i--) {

        if (q[i] === arr[i])
            continue;

        console.log("q : ", q);
        console.log("arr : ", arr);
        console.log(q[i], " / ",  arr[i - 1], " / ",  arr[i - 2]);
        console.log(q[i] !== arr[i - 1], " && ", q[i] !== arr[i - 2]);
        if (q[i] !== arr[i - 1] && q[i] !== arr[i - 2]) {
            count = -1;
            break;
        }

        const target = q[i];
        let moveIdx = getIndex(arr, target);

        arr.splice(moveIdx, 1);

        count += i - moveIdx;
    }

    if (count === -1)
        console.log("Too chaotic");
    else
        console.log(count);

}

function getIndex(arr, value) {

    let size = arr.length;
    let idx = 0;
    for (idx = size - 1; idx >= 0; idx--) {
        if (arr[idx] === value)
            break;
    }

    return idx;
}

const data1 = [2, 1, 5, 3, 4];
const data2 = [2, 5, 1, 3, 4];              // Too chaotic
const data3 = [5, 1, 2, 3, 7, 8, 6, 4];     // Too chaotic
const data4 = [1, 2, 5, 3, 4, 7, 8, 6];     // 4

minimumBribes(data2);
