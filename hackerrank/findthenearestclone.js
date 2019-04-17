class Node {
    constructor(node, color) {
        this.node = node;
        this.color = color;
        this.next = [];
    }
}

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    // solve here
    console.log(graphNodes, graphFrom, graphTo, ids, val);

    // 1. making graph
    const root = new Node(1, ids[0]);

    for (let i = 0; i < graphNodes - 1; i++) {
        let parentNode = getNode(root, graphFrom[i]);
        let node = new Node(graphTo[i], ids[i + 1]);

        if (parentNode === null)  {
            parentNode = getNode(root, graphTo[i]);
            node = new Node(graphFrom[i], ids[i + 1]);
        }
    
        console.log(i, ") new node : ", node, "from => to", graphFrom[i], "=>", graphTo[i]);
        console.log("parent node : ", parentNode);
        parentNode.next.push(node);
    }
    console.log("RESULT ROOT",root);

    // 2. counting shortest path
    console.log("RESULT COUNTING : ", getCounting(root, val, false, -1));

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

// Using counting shortest path
//function getCounting(root, color, false, -1) {
function getCounting(root, color, isCounting, accCount) {

    let rootCount = -1;                  // 결과값
    let count = accCount;               // accCount
    let nextSize = root.next.length;
    let countingFlag = isCounting;

    // root을 하나 거쳐왔으니,
    if (isCounting === true) {
        count++;
    }

    // 자신이 색깔을 갖고 있으면
    if (root.color === color) {
        if (isCounting) rootCount = count;

        countingFlag = true;
        count = 0;              // 초기화
    }

    for (let i = 0; i < nextSize; i++) {
        let childCount = getCounting(root.next[i], color, countingFlag, count);

        if (childCount !== -1) {
            if (rootCount !== -1) {
                if (childCount < rootCount)
                    rootCount = childCount;
            }
            else {
                rootCount = childCount;
            }
        }
    }

    return rootCount;
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

