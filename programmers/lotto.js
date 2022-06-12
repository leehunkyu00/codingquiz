// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
// 로또의 최고 순위와 최저 순위

const LOTTO_SIZE = 6;                       // 로또 사이즈
const WIN_TABLE = [6, 6, 5, 4, 3, 2, 1];    // [맞춘 개수] = 등수

function solution(lottos, win_nums) {
    var answer = [];
    
    const nonZeroLottos = lottos.filter(num => num != 0);
    const collectLottos = nonZeroLottos.filter(num => win_nums.includes(num))
    
    const low = collectLottos.length;
    const high = low + LOTTO_SIZE - nonZeroLottos.length;
    
    return [WIN_TABLE[high], WIN_TABLE[low]];
}


// test code
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
//[3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
//[1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))
//[1, 1]