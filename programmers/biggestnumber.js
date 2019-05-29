/* 
설계,
배열을 역순정렬로 한다.
역순 정렬 후에 '확정'이라는 과정을 거친다.
확정 case 1) 경합이 없이 9와 8을 비교하는 것과 같은 것은 바로 9, 8을 string으로 붙여넣는다.
확정 case 2) 123, 1234, 12345 와 같이 비교가 안되는 부분을 경합 부분(길이가 다른경우)이라 하여 그룹으로 만들고 getBiggerIndex로 index하나씩 받는다
             경합 부분에서 index가 나올때 마다 확정을 짓고 계속 확정 과정을 진행시킨다.
*/
function solution(numbers) {

    let answer = '';
    let strNumbers = numbers.sort().reverse().reduce((acc, curr) => {
        acc.push(curr.toString());
        return acc;
    }, []);

    console.log(strNumbers);


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

//solution([6, 10, 2]);
//solution([13, 10, 2]);
//solution([3, 30, 34, 5, 9]);

//console.log("Result : ", getBiggerIndex([3, 30, 34, 5, 9], [1, 3]));
console.log("Result : ", getBiggerIndex([3, 30, 34, 5, 9], [0, 4]));
//console.log("Result : ", getBiggerIndex([3, 30, 34, 5, 9, 12, 14, 15], [2, 4]));