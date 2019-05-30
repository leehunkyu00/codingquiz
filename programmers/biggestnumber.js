/*
정렬 > 가장 큰 수
https://programmers.co.kr/learn/courses/30/lessons/42746

채점 결과
정확성: 27.3
합계: 27.3 / 100.0
*/

function solution(numbers) {

    let strNumbers = numbers
        .filter((value, index, self) => {
            return self.indexOf(value) === index;
        }).reduce((acc, curr) => {
            acc.push(curr.toString());
            return acc;
        }, []);

    let sortedStrNumbs = strNumbers.sort((a, b) => {
        const intA = parseInt(a);
        const intB = parseInt(b);
        if (a.length === b.length) {
            return intA - intB;
        }
        else {
            // diff pre part
            let idx = 0;
            while (a[idx] && b[idx]) {
                if (a[idx] !== b[idx]) {
                    return parseInt(a[idx]) - parseInt(b[idx]);
                }

                idx += 1;
            }

            // diff post part
            let aIdxMinus = 0;
            let bIdxMinus = 0;
            if (a.length > b.length) {
                bIdxMinus = idx;
            }
            else {
                aIdxMinus = idx;
            }

            while (a[idx - aIdxMinus] && b[idx - bIdxMinus]) {
                if (a[idx - aIdxMinus] !== b[idx - bIdxMinus]) {
                    return parseInt(a[idx - aIdxMinus]) - parseInt(b[idx - bIdxMinus]);
                }

                idx += 1;
            }

            // least part
            if (a.length > b.length) {
                return parseInt(a[0]) - parseInt(a[idx]);
            }
            else {
                return parseInt(b[0]) - parseInt(b[idx]);
            }
        }
    }).reverse();

    return sortedStrNumbs.join('');
}

/* 
설계,
배열을 역순정렬로 한다.
역순 정렬 후에 '확정'이라는 과정을 거친다.
확정 case 1) 경합이 없이 9와 8을 비교하는 것과 같은 것은 바로 9, 8을 string으로 붙여넣는다.
확정 case 2) 123, 1234, 12345 와 같이 비교가 안되는 부분을 경합 부분(길이가 다른경우)이라 하여 그룹으로 만들고 getBiggerIndex로 index하나씩 받는다
             경합 부분에서 index가 나올때 마다 확정을 짓고 계속 확정 과정을 진행시킨다.
*/
function solution2(numbers) {

    let answer = '';
    let strNumbers = numbers.sort().reverse().reduce((acc, curr) => {
        acc.push(curr.toString());
        return acc;
    }, []);

    while (strNumbers.length) {
        console.log(strNumbers[0]);
        if (strNumbers.length == 1) {
            answer += strNumbers.shift();
        }
        //else if (strNumbers[0].length == strNumbers[1].length) {
        else {
            let idx = getBiggerIndex(strNumbers, [0, strNumbers.length - 1]);
            answer += strNumbers.splice(idx, 1);
        }
        //strNumbers.shift();     // for test TODO delete
    }


    return answer;
}

//function getBiggerIndex(arr, [start, end]) {
function getBiggerIndex(arr, range) {

    // making pre, post str
    const preStr = range[0] === 0 ? "" : arr.slice(0, range[0]).join('');
    const postStr = range[1] === arr.length - 1 ? "" : arr.slice(range[1] + 1).join('');


    const rangeArr = [];
    for (let i = 0; i <= range[1] - range[0]; i++) {
        rangeArr.push(range[0] + i);
    }

    let max = parseInt(arr.join(''));
    let maxArr = rangeArr;

    // mix range
    // [0, 4] => [0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3] ...
    permArr = [], usedChars = [];
    const permCase = permute(rangeArr);
    permCase.forEach((caseArr) => {
        const caseStr = caseArr.reduce((acc, curr) => {
            acc += arr[curr];
            return acc;
        }, "")


        const curValue = parseInt(preStr + caseStr + postStr);
        if (curValue > max) {
            max = curValue;
            maxArr = caseArr;
        }
    })
    console.log("max ", max);
    console.log("maxArr", maxArr);

    return maxArr[0];
}

// premutations, 순열
let permArr = [], usedChars = [];           // 고쳐야할 부분. 재귀함수라서 애매하다
function permute(input) {
    let i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length === 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
}

let res;
res = solution([3, 30, 34, 5, 9]);
console.log(res);
res = solution([0, 0, 0, 0]);        // -> 0
console.log(res);
res = solution([0, 1000, 0, 0]); // -> 100000
console.log(res);
res = solution([12, 121]); // -> 12121
console.log(res);
res = solution([21, 212]); // -> 21221
console.log(res);

//solution2([6, 10, 2]);
//solution2([13, 10, 2]);
//solution2([3, 30, 34, 5, 9]);
//solution2([3, 30, 34, 5, 9]);
//solution2([4, 3, 2, 6, 7, 11, 12, 13, 14, 15, 127, 128, 129]);

//console.log("Result : ", getBiggerIndex([3, 30, 34, 5, 9], [1, 3]));
// console.log("Result : ", getBiggerIndex([3, 30, 34, 5, 9], [0, 4]));
//console.log("Result : ", getBiggerIndex([3, 30, 34, 5, 9, 12, 14, 15], [2, 4]));
