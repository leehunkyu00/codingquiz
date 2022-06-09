//https://programmers.co.kr/learn/courses/30/lessons/49994
// 방문 길이

const MAP_MIN = -5;
const MAP_MAX = 5;

function move(direction, point) {
    switch(direction) {
        case 'U':
            point[0] -= 1;
            break;
        case 'D':
            point[0] += 1;
            break;
        case 'L':
            point[1] -= 1;
            break;
        case 'R':
            point[1] += 1;
            break;
    }
    
    moveValidPoint(point);
}

function moveValidPoint(botPoint) {
    botPoint.forEach((point, idx) => {
        if (point < MAP_MIN) {
            botPoint[idx] = MAP_MIN;
        }
        else if (point > MAP_MAX) {
            botPoint[idx] = MAP_MAX;
        }
    });
}

function isNewPath(history, botSPoint, botDPoint) {
    
    const botPoints1 = [...botSPoint, ...botDPoint];
    const botPoints2 = [...botDPoint, ...botSPoint];
    
    if (botSPoint[0] == botDPoint[0] && botSPoint[1] == botDPoint[1]) {
        return 0;
    }
    
    let isPassed = history.some(path => {
        return path.every((ele, idx) => ele == botPoints1[idx]) ||
            path.every((ele, idx) => ele == botPoints2[idx]);
    })
    
    if (isPassed) {
        return 0;
    }
    else {
        history.push(botPoints1);
        
        return 1;
    }
    
}

function solution(dirs) {
    let answer = 0;
    
    let botSPoint = [0, 0]; // start point
    const botDPoint = [0, 0];   // destination point
    
    const history = [];			// [[x1, y1, x2, y2], ... ]

    dirs.split('').forEach(direction => {
        move(direction, botDPoint);
        answer += isNewPath(history, botSPoint, botDPoint);
        botSPoint = botDPoint.slice();
    });

    return answer;
}

// test code
const testCases = [["ULURRDLLU", 7], ["LULLLLLLU", 7]];
testCases.forEach((testSet, idx) => {
    if (solution(testSet[0]) == testSet[1]) {
        console.log(`Case ${idx} is PASS`);
    }
    else {
        console.log(`Case ${idx} is FAIL`);
    }
})