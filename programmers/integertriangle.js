// https://programmers.co.kr/learn/courses/30/lessons/43105
// 동적계획법(Dynamic Programming) > 정수 삼각형

// 채점 결과
// 정확성: 64.3
// 효율성: 35.7
// 합계: 100.0 / 100.0

function solution(triangle) {
    for (let idxDepth = triangle.length - 1; idxDepth > 0; idxDepth--) {
        for (let idxNode = 0, lenEnd = triangle[idxDepth].length - 1; idxNode < lenEnd; idxNode++) {
            if (triangle[idxDepth][idxNode] > triangle[idxDepth][idxNode + 1]) {
                triangle[idxDepth - 1][idxNode] =
                    triangle[idxDepth][idxNode] + triangle[idxDepth - 1][idxNode];
            }
            else {
                triangle[idxDepth - 1][idxNode] =
                    triangle[idxDepth][idxNode + 1] + triangle[idxDepth - 1][idxNode];
            }
        }
    }

    return triangle[0][0];
}

let data;
let res = 0;

data = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
res = 0;
res = solution(data);