// 이진변환 문제
// https://programmers.co.kr/skill_checks/377535

function solution(s) {
    let tmp = s.split('');
    let zeroCnt = 0;
    let loopCnt = 0;
    
    while (!(tmp.length == 1 && tmp[0] == 1 )) {
        let nonZeroArr = tmp.filter(val => val != 0);
        
        zeroCnt += tmp.length - nonZeroArr.length;
        loopCnt++;
        
        tmp = nonZeroArr.length.toString(2).split('');
    }
    return [loopCnt, zeroCnt]
}