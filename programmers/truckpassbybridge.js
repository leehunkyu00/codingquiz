// https://programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    var time = 1;

    var bridge = [];
    var sumWeight = 0;
    var truckIdx = 1;
    var truckLength = truck_weights.length;

    // init
    bridge.push({ weight: truck_weights[0], second: bridge_length });
    sumWeight = truck_weights[0];

    while(bridge.length > 0) {
        // count second
        for (var i = 0, len = bridge.length; i < len; i++) {
            bridge[i].second -= 1;
            if (bridge[i].second === 0) {
                sumWeight -= bridge[i].weight;
                bridge.splice(i, 1);        // remove
                i--;
                len--;
            }
        }

        if (truckLength > truckIdx) {
            if (sumWeight + truck_weights[truckIdx] <= weight) {
                // go to bridge
                bridge.push({ weight: truck_weights[truckIdx], second: bridge_length });
                sumWeight += truck_weights[truckIdx];
                truckIdx += 1;
            }
        }

        // count time
        time += 1;
    }

    return time;
}

console.log("result : ", solution(2, 10, [7, 4, 5, 6]));                        // 8
console.log("result : ", solution(100, 100, [10]));                             // 101
console.log("result : ", solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));  // 110