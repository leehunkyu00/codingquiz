// https://programmers.co.kr/learn/courses/30/lessons/42588?language=javascript
// 스택/큐, 탑

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(heights) {
    var answer = [];

    for (let i = heights.length - 1; i >= 0; i--) {

        let fndIdx = i - 1;
        while (fndIdx >= 0) {
            // if found, push number(index + 1)
            if (heights[fndIdx] > heights[i]) {
                answer.unshift(fndIdx + 1);
                break;
            }
            fndIdx -= 1;
        }

        if (fndIdx === -1) {
            // if not found, push 0
            answer.unshift(0);
        }
    }

    return answer;
}

let heights = [6,9,5,7,4];
solution(heights);