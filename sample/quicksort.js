
let count = 0;
function isEqual(a, b) {

    if (a == b)
        return true;
    else
        return false;
}

// a < b
function lessThan(a, b) {

    if (a > b)
        return true;
    else
        return false;
}

function quickSort(originArray) {

    const array = [...originArray];

    if (array.length <= 1) {
        return array;
    }
    console.log(array);
    count += 1;

    const leftArray = [];
    const rightArray = [];

    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    while (array.length) {
        const currentElement = array.shift();

        if (currentElement == pivotElement) {
            centerArray.push(currentElement);
        }
        else if (currentElement < pivotElement) {
            leftArray.push(currentElement);
        }
        else {
            rightArray.push(currentElement);
        }

    }

    let leftArraySorted = [];
    let rightArraySorted = [];
    if (leftArray.length === 0) {
        rightArraySorted = quickSort(rightArray);
    } else if (rightArray.length === 0) {
        leftArraySorted = quickSort(leftArray);
    } else {
        leftArraySorted = quickSort(leftArray);
        rightArraySorted = quickSort(rightArray);
    }


    return leftArraySorted.concat(centerArray, rightArraySorted);
}

//let testArray1 = [7, 1, 3, 2, 4, 5, 6];
//let testArray2 = [2, 3, 4, 1, 5];
let testArray3 = [1, 3, 5, 2, 4, 6, 7];

console.log(quickSort(testArray3));
console.log("count : ", count);
