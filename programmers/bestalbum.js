// https://programmers.co.kr/learn/courses/30/lessons/42579#
// 베스트앨범

function solution(genres, plays) {
    var answer = [];
    var orders = []; // [{type: "classic", mostPlay:400, plays: [{plays: 300, index: 0}, {...}]}, ... ]

    genres.forEach(function(value, index) {
        // add geners section
        var isExist = false;
        for (var i = 0, len = orders.length; i < len; i++) {
            if (orders[i].type === value) {
                orders[i].plays.push({ "plays": plays[index], "index": index });
                // update most plays
                if (plays[index] > orders[i].mostPlay) {
                    orders[i].mostPlay = plays[index];
                }

                isExist = true;
                break;
            }
        }
        if (isExist === false) {
            orders.push({ type: value, mostPlay: plays[index], plays: [{ "plays": plays[index], "index": index }] });
        }
    });

    // sorting plays in genre
    orders.forEach(function(value) {
        value.plays.sort(function (a, b) {
            if (a["plays"] > b["plays"]) {
                return -1;
            }
            else if (a["plays"] < b["plays"]) {
                return 1;
            }
            else if (a["plays"] === b["plays"]) {
                if (a["index"] > b["index"]) {
                    return 1;
                }
                else if (a["index"] < b["index"]) {
                    return -1;
                }
            }
        });
    });

    // sorting genre
    orders.sort(function (a, b) {
        if (a["mostPlay"] > b["mostPlay"]) {
            return -1;
        }
        else if (a["mostPlay"] < b["mostPlay"]) {
            return 1;
        }
        else {
            return 0;
        }
    });

    // print index by order
    orders.forEach(function (value) {
        for (var i = 0, len = value["plays"].length; i < len && len - i > 1; i += 2) {
            answer.push(value["plays"][i]["index"]);
            answer.push(value["plays"][i + 1]["index"]);
        }
    })

    return answer;
}


var genres = ["classic", "pop", "classic", "classic", "pop"];
var plays = [500, 600, 150, 800, 2500];

var genres1 = ["classic", "classic", "classic"];
var plays1 = [500, 800, 2500];

var genres2 = ["classic1", "classic2", "classic1"];
var plays2 = [500, 800, 2500];
console.log(solution(genres2, plays2));