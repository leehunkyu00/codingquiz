class Node {
    constructor(node, color) {
        this.node = node;
        this.color = color;
        this.next = [];
    }
}

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    // solve here
    //console.log(graphNodes, graphFrom, graphTo, ids, val);

    // 1. making graph
    /*
    const root = new Node(1, ids[0]);

    for (let i = 0; i < graphNodes - 1; i++) {
        let parentnode = getnode(root, graphfrom[i]);
        let node = new node(graphto[i], ids[i + 1]);

        if (parentnode === null)  {
            parentnode = getnode(root, graphto[i]);
            node = new node(graphfrom[i], ids[i + 1]);
        }

        parentnode.next.push(node);
    }
    */
    let graph = [];
    for (let i = 0; i < graphFrom.length; i++) {
        let fromNode = graph[graphFrom[i]];
        let toNode = graph[graphTo[i]];

        if (!fromNode) {
            fromNode = new Node(graphFrom[i], -1);
            graph[graphFrom[i]] = fromNode;;
        }

        if (!toNode) {
            toNode = new Node(graphTo[i], -1);
            graph[graphTo[i]] = toNode;;
        }

        // eixst from, to node
        toNode.color = ids[i];

        fromNode.next.push(toNode);
    }

    // 2. counting shortest path
    //console.log("RESULT COUNTING : ", iteratingRoot(root, val));
    return iteratingRoot(root, val);

}


// Using making graph
function getNode(root, node) {

    if (root.node === node)
        return root;

    let nextSize = root.next.length;
    let resNode = null;

    for (let i = 0; i < nextSize; i++) {
        // check child node
        if (root.next[i].node === node) {
            resNode = root.next[i];
            break;
        }

        // go recursive with child
        resNode = getNode(root.next[i], node);
        if (resNode !== null) {
            break;
        }
    }

    return resNode;
}

function iteratingRoot(root, color) {

    //console.log("");
    //console.log("=====");
    //console.log("iteratingRoot ", root, color);
    const nextSize = root.next.length;
    let minArr = [];        // save 2 min value
    let res = -1;

    if (root.color === color) {
        minArr.push(0);
    }

    for (let i = 0; i < nextSize; i++) {
        let iterCount = iteratingRoot(root.next[i], color);

        let cnt = getCountPath(root.next[i], color, 0);

        //console.log("iteratingRoot", i, ") return countpath : ", cnt);
        if (cnt === -1) continue;

        if (minArr.length !== 2) {
            minArr.push(cnt);
        }
        else {
            if (minArr[0] > minArr[1]) {
                let tmp = minArr[1];
                minArr[1] = minArr[0];
                minArr[0] = tmp;
            }

            // minArr[0] < minArr[1]..
            if (cnt < minArr[1]) {
                minArr[1] = cnt;
            }
        }
    }

    if (minArr.length === 2) {
        res = minArr[0] + minArr[1];
        //console.log("iteratingRoot", minArr[0], " + ", minArr[1]);
    }

    //console.log("iteratingRoot return res : ", res);
    return res;
}

function getCountPath(root, color, accumulateCount) {

    const nextSize = root.next.length;
    let min = -1;

    let cnt1 = -1;
    let cnt2 = -1;

    //console.log("getCountPath ", root, color, accumulateCount);
    if (root.color === color) {
        //console.log("getCountPath return color === color : ", accumulateCount + 1);
        return accumulateCount + 1;
    }
    else if (root.next.length === 0) {
        //console.log("getCountPath return next.length === 0: ", -1);
        return -1;
    }

    for (let i = 0; i < nextSize; i++) {
        //console.log("getCountPath", i, " / call ", root.next[i], color, accumulateCount + 1);
        let cnt = getCountPath(root.next[i], color, accumulateCount + 1);
        if (cnt === -1) continue;

        if (min === -1) {
            min = cnt;
        }
        else {
            if (cnt < min)
                min = cnt;
        }
    }

    //console.log("getCountPath return min : ", min);
    return min;
}

let sampleData1 = {
    graphNodes : 4,
    graphFrom : [1, 1, 4],
    graphTo : [2, 3, 2],
    ids : [1, 2, 1, 1],
    val : 1
}

let sampleData2 = {
    graphNodes : 4,
    graphFrom : [1, 1, 4],
    graphTo : [2, 3, 2],
    ids : [1, 2, 3, 4],
    val : 2
}

let sampleData3 = {
    graphNodes : 5,
    graphFrom : [1, 1, 2, 3],
    graphTo : [2, 3, 4, 5],
    ids : [1, 2, 3, 3, 2],
    val : 2
}

const { graphNodes, graphFrom, graphTo, ids, val } = sampleData3;

findShortest(graphNodes, graphFrom, graphTo, ids, val);

