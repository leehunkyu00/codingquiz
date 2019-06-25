// https://programmers.co.kr/learn/courses/30/lessons/43162
// 깊이/너비 우선 탐색(DFS/BFS) > 네트워크

class Node {
    constructor(data, section) {
        this.data = data;
        this.networkSection = section;
        this.nexts = [];
        this.prev = null;
    }
}

/**
 * iteration binary
 * @param {*} root 
 * @param {*} data for found Data
 * Finding data, return 1. else return -1
 */
function iter(node, data) {
    // implement
    if (node.data === data) {
        return node;
    }

    if (node.nexts.length === 0) {
        return null;
    }

    const childNodes = node.nexts;
    for (let i = 0, len = childNodes.length; i < len; i++) {
        let res = iter(childNodes[i], data);
        if (res !== null) {
            return res;
        }
    }

    return null;
}

function solution(n, computers) {

    let root = new Node(-1, -1);
    let networkCnt = 0;
    computers.forEach((network) => {
        let parent = root;
        for (let i = 0, len = network.length; i < len; i++) {
            if (network[i] === 1) {
                // iterate parent
                let foundNode = iter(root, i);    // root을 돌면서 i값인 node을 갖고와라
                if (foundNode !== null) {
                    // node을 찾았다면,

                    let idx = foundNode.prev.nexts.indexOf(foundNode);
                    foundNode.prev.nexts.splice(idx, 1);

                    parent.nexts.push(foundNode);
                    parent = foundNode;
                }
                else {
                    // node을 찾지 못했다면,
                    let node = null;
                    if (parent === root) {
                        networkCnt += 1;

                        node = new Node(i, networkCnt);
                    }
                    else {
                        node = new Node(i, parent.networkSection);
                    }
                    node.prev = parent;

                    parent.nexts.push(node);
                    parent = node;
                }
            }
        }
    })

    console.log(root);
    printAll(root);
    return networkCnt;
}

function printAll(node) {
    // implement
    console.log(node.data, ":", node);

    if (node.nexts.length === 0) {
        return null;
    }

    const childNodes = node.nexts;
    for (let i = 0, len = childNodes.length; i < len; i++) {
        printAll(childNodes[i], data);
    }
}

let res;
let data;
data = [3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]];
data = [4, [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 1, 1], [1, 1, 1, 0]]];
res = solution(...data);


console.log(res)