// https://programmers.co.kr/skill_checks/377535
// 변형된 피보나치 구하기

function solution(n) {
    var answer = 0;
    var fibo = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567
    }
    
    return fibo[n]
}