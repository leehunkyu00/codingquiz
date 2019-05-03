// https://programmers.co.kr/learn/courses/30/lessons/42579#
// 베스트앨범

function solution(genres, plays) {
    var answer = [];
    var orders = []; // [{type: "classic", totalPlay:2300, plays: [{plays: 300, index: 0}, {...}]}, ... ]

    genres.forEach(function(value, index) {
        // add geners section
        var isExist = false;
        for (var i = 0, len = orders.length; i < len; i++) {
            if (orders[i].type === value) {
                orders[i].plays.push({ "plays": plays[index], "index": index });
                orders[i].totalPlay += plays[index];

                isExist = true;
                break;
            }
        }

        if (isExist === false) {
            orders.push({ type: value, totalPlay: plays[index], plays: [{ "plays": plays[index], "index": index }] });
        }
    });

    // sorting plays in genre
    orders.forEach(function(value) {
        value.plays.sort(function (a, b) {
            if (a["plays"] === b["plays"]) {
                return a.index - b.index;
            }
            return b.plays -a.plays;
        });
    });

    // sorting genre
    orders.sort(function (a, b) {
        return b.totalPlay - a.totalPlay;
    });

    // print index by order
    orders.forEach(function (gerne) {
        for (var i = 0, len = gerne.plays.length; i < len && i < 2; i++) {
            answer.push(gerne.plays[i].index);
        }
    })

    return answer;
}


// [ 4, 1, 3, 0 ]
var genres = ["classic", "pop", "classic", "classic", "pop"];
var plays = [500, 600, 150, 800, 2500];

// [ 2, 1 ]
var genres1 = ["classic", "classic", "classic"];
var plays1 = [500, 800, 2500];

// [ 2, 0, 1]
var genres2 = ["classic1", "classic2", "classic1"];
var plays2 = [500, 800, 2500];

console.log(solution(genres, plays));
console.log(solution(genres1, plays1));
console.log(solution(genres2, plays2));