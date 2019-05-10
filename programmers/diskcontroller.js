// https://programmers.co.kr/learn/courses/30/lessons/42627
// 디스크 컨트롤러

function solution(jobs) {
    var durAvag = 0;
    var durSum = 0;                 // 동작 총 시간

    var distHead = 0;               // 마지막 지점
    var jobsLength = jobs.length;

    var jobQueue = [];
    var jobIdx = 0;

    jobs.sort(function (a, b) {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    while(jobIdx < jobsLength || jobQueue.length) {
        // insert jobQueue
        while (jobs[jobIdx] && distHead >= jobs[jobIdx][0]) {
            jobQueue.push(jobs[jobIdx]);
            jobQueue.sort(function (a, b) {
                //return (distHead - a[0] + a[1]) - (distHead - b[0] + b[1]); // fail solution
                return a[1] - b[1];
            });
            jobIdx += 1;
        }

        // caculate
        if( jobQueue.length === 0 ) {
            // not Overlap timming
            distHead = jobs[jobIdx][0];
        } else {
            // Overlap timming
            var disk = jobQueue.shift();

            durSum += (distHead - disk[0]) + disk[1];
            distHead += disk[1];
        }
    }

    durAvag = Math.floor(durSum / jobsLength);

    return durAvag;
}

function generateQuiz(num) {

    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push([getRandom(i * 10), getRandom(i * 10)]);
    }

    return result;
}

function getRandom(limitNum) {
    return Math.floor(Math.random() * limitNum) + 1;
}

let jobs;

jobs = [[0, 3], [1, 9], [2, 6]];                    // 9
console.log(solution(jobs));
jobs = [[0, 3], [1, 9], [2, 6], [19, 5] ];          // 8
console.log(solution(jobs));
jobs = [[1, 3], [2, 9], [3, 6]];                    // 9
console.log(solution(jobs));
jobs = [[0, 3], [4, 3], [8, 3]];                    // 3
console.log(solution(jobs));
jobs = [[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]];    // 13
console.log(solution(jobs));
jobs =  [[1, 9], [1, 4], [1, 5], [1, 7], [1, 3]];   // 13
console.log(solution(jobs));
jobs =  [[2, 9], [2, 4], [2, 5], [2, 7], [2, 3]];   // 13
console.log(solution(jobs));
jobs =  [[0, 3], [5, 1]];                           // 2
console.log(solution(jobs));
jobs = [[2, 9], [2, 4], [3, 5], [3, 7], [5, 3], [5, 3], [1, 1]]; // 11
console.log(solution(jobs));
jobs = [[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]];                   // 74
console.log(solution(jobs));
jobs = [[ 2, 2 ], [ 6, 35 ], [ 7, 22 ], [ 10, 17 ], [ 29, 3 ], [ 29, 4 ], [ 29, 70 ], [ 33, 11 ], [ 36, 7 ], [ 65, 97 ]];   // 64
console.log(solution(jobs));
jobs = [[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 2], [15, 34], [35, 43], [26, 1]];                   // 74
console.log(solution(jobs));
jobs = [ [ 1, 146 ], 
[ 2, 7 ],
[ 2, 9 ],
[ 8, 21 ],
[ 19, 20 ],
[ 22, 36 ],
[ 22, 148 ],
[ 28, 38 ],
[ 39, 26 ],
[ 43, 81 ],
[ 49, 63 ],
[ 50, 33 ],
[ 68, 36 ],
[ 75, 76 ],
[ 84, 39 ],
[ 117, 60 ],
[ 135, 99 ],
[ 142, 32 ],
[ 174, 111 ],
[ 195, 179 ] ];   // 422
console.log(solution(jobs));

jobs = generateQuiz(20);
console.log(solution(jobs));        // random