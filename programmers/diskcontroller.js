// https://programmers.co.kr/learn/courses/30/lessons/42627
// 디스크 컨트롤러

function solution(jobs) {
    var durAvag;
    var curPoint = 0;               // 마지막 지점
    var durSum = 0;                 // 동작 총 시간
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
        while (jobs[jobIdx] && curPoint >= jobs[jobIdx][0]) {
            jobQueue.push(jobs[jobIdx]);
            jobQueue.sort(function (a, b) {
                //return (a[0] + a[1]) - (b[0] + b[1]);
                return (curPoint - a[0] + a[1]) - (curPoint - b[0] + b[1]);
            });
            jobIdx += 1;
        }

        /*
        console.log("TEST");
        jobQueue.forEach((value, index) => {
            console.log(index, ") ", value, " : ", curPoint - value[0] + value[1]);
        });
        */

        // caculate
        if( jobQueue.length === 0 ) {
            // not Overlap timming
            var disk = jobs[jobIdx];

            durSum += disk[1];
            curPoint += (disk[0] - curPoint) + disk[1];

            jobIdx += 1;
        } else {
            // Overlap timming
            var disk = jobQueue.shift();

            durSum += (curPoint - disk[0]) + disk[1];
            curPoint += disk[1];
        }
    }

    durAvag = parseInt(durSum / jobsLength);
    return durAvag;
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));          // 9
//console.log(solution([[0, 3], [1, 9], [2, 6], [19, 5]]));
//console.log(solution([[0, 3], [4, 3], [8, 3], [10, 3]]));
//console.log(solution([[1, 3], [2, 9], [3, 6]]));
//console.log(solution([[0, 3], [4, 3], [8, 3]]));
//console.log(solution( [[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]));     // 13
//console.log(solution( [[1, 9], [1, 4], [1, 5], [1, 7], [1, 3]]));     // 13
//console.log(solution( [[2, 9], [2, 4], [2, 5], [2, 7], [2, 3]]));     // 13
//console.log(solution( [[0, 3], [5, 1]] ));      // 2
//console.log(solution( [[2, 3], [8, 1]] ));      // 2

//console.log(solution( [[2, 9], [2, 4], [3, 5], [3, 7], [5, 3], [5, 3], [1, 1]]));     // 13