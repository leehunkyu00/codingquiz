// https://programmers.co.kr/learn/courses/30/lessons/42586
// 스택/큐 > 기능개발

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(progresses, speeds) {
    let answer = [];

    let days = 0;
    while (progresses.length) {

        const progress = progresses.shift();
        const speed = speeds.shift();
        let funcCnt = 1;

        // complete function
        while (progress + (speed * days) < 100) {
            days += 1;
        }

        // count next function
        while (progresses[0] && progresses[0] + (speeds[0] * days) >= 100) {
            progresses.shift();
            speeds.shift();

            funcCnt += 1;
        }

        answer.push(funcCnt);
    }

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
