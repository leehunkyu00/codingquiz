function solution(people, limit) {
    let answer = 0;

    people.sort();

    let idx = people.length - 1;
    while (idx >= 0) {
        if (people[idx] === -1) {
            idx -= 1;
            continue;
        }

        let walkerIdx = idx - 1;
        let confirmIdx = -1;

        while (walkerIdx >= 0) {
            if (confirmIdx === -1 && people[idx] + people[walkerIdx] < limit) {
                confirmIdx = walkerIdx;
            }

            if (people[idx] + people[walkerIdx] > limit) {
                // walker--;
                walkerIdx -= 1;
            }
            else if (people[idx] + people[walkerIdx] === limit) {
                // === limit or < limit
                confirmIdx = walkerIdx;
                break;
            }
        }

        // remove idx
        people[idx] = -1;
        if (confirmIdx >= 0) {
            people[confirmIdx] = -1;
        }

        answer += 1;
    }

    return answer;
}

function solution2(people, limit) {
    let answer = 0;

    people.sort();

    while (people.length > 0) {
        let idx = people.length - 1;
        let walker = people.length - 2;
        let confirmIdx = -1;

        while (walker >= 0) {
            if (confirmIdx === -1 && people[idx] + people[walker] < limit) {
                confirmIdx = walker;
            }

            if (people[idx] + people[walker] > limit) {
                // walker--;
                walker -= 2;
            }
            else if (people[idx] + people[walker] === limit) {
                // === limit or < limit
                confirmIdx = walker;
                break;
            }
        }

        // remove idx
        people.splice(idx, 1);
        if (confirmIdx >= 0) {
            people.splice(confirmIdx, 1);
        }

        answer += 1;
    }

    return answer;
}

function solution3(people, limit) {
    let answer = 0;

    people.sort();

    while (people.length > 0) {
        let idx = people.length - 1;
        let walker = people.length - 2;

        while (walker >= 0) {
            if (people[idx] + people[walker] > limit) {
                walker--;
            }
            else {
                // done
                break;
            }
        }
        people.splice(idx, 1);
        if (walker >= 0) {
            people.splice(walker, 1);
        }
        answer += 1;
    }

    return answer;
}

let datas;
let result;

datas = [[70, 50, 80, 50], 100];
result = solution(datas[0], datas[1]);

console.log("Result : ", result);