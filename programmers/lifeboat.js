function solution(people, limit) {
    let answer = 0;
    let idxHead = 0, idxTail = people.length - 1;

    people.sort((a, b) => a - b);

    while (idxHead < idxTail) {
        if (people[idxHead] + people[idxTail] <= limit) {
            idxHead += 1;
        }
        idxTail -= 1;
        answer += 1;
    }

    // counting left person
    if (idxHead == idxTail) {
        answer += 1;
    }

    return answer;
}

let datas;
let result;

datas = [[70, 50, 80, 50], 100];
datas = [[70, 80, 50], 100];
datas = [[40, 40, 40], 100];
datas = [[10, 20, 30, 40, 50, 60, 70, 80, 90], 100];
result = solution(datas[0], datas[1]);

console.log("Result : ", result);

