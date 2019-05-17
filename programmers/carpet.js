// https://programmers.co.kr/learn/courses/30/lessons/42842
// 완전탐색, 카펫

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(brown, red) {
    let answer = [];

    const redPrimesArr = getPrimeNumber(red);

    for (let i = 0, len = redPrimesArr.length; i < len; i++) {
        const primeArr = redPrimesArr[i];

        if (((primeArr[0] + primeArr[1]) * 2 + 4) === brown) {
            answer = [primeArr[0] + 2, primeArr[1] + 2];
            break;
        }
    }

    return answer;
}

function getPrimeNumber(num) {
    let idx = 1;
    let res = [];

    if (num === 1) {
        return [[1, 1]];
    }

    while(1) {
        if (num % idx === 0) {
            if(idx > num/idx) {
                break;
            }
            // quiz role : index[0] value > index[1] value
            res.push([num/idx, idx]);
        }
        idx++;
    }

    return res;
}


let sol = 0;
sol = solution(10, 2);
console.log(sol);
sol = solution(8, 1);
console.log(sol);
sol = solution(24, 24);
console.log(sol);