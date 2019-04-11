
class Node {
    constructor(row, col, isIterCol) {
        this.row = row;
        this.col = col;
        this.isIterCol = isIterCol;
        this.resistChars = [];
    }

    setResistWord(index, ch) {
        resistChars.push({index, character: ch});
    }
}

function crosswordPuzzle(crossword, hints) {

    console.log(crossword, " / ", hints);

    // 1. find - word
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (crossword[i][j] === '-') {
                // start recursive function

                console.log("find ", i, j);
                run([new Node(i, j, false), new Node(i, j, true)], crossword, hints.split(";"));

                i =  100;
                j =  100;
            }
        }
    }
}


function run(pointQueue, crossword, hints) {
    const node = pointQueue.pop();
    let resistChar = [];
    let count = 1;

    if (hints.length === 0) {
        console.log(crossword);// found end case
    }

    console.log(node, crossword);
    if (node.isIterCol) {
        // column

        // left
        for (let i = 1; i < 10; i++) {
            // search row
            let left = node.col - i;

            if (crossword[node.row][left] === "-") {
                count++;

                if(node.row - 1 >= 0) {
                    if (crossword[node.row - 1][left] === "-") {
                        resistChar.push(new Node(node.row, left, false));
                    }
                }
                if(node.row + 1 < 10) {
                    if (crossword[node.row + 1][left] === "-") {
                        resistChar.push(new Node(node.row, left, false));
                    }
                }
            }
            else {
                break;
            }
        }

        // right
        for (let i = 1; i < 10; i++) {
            // search column
            let right = node.col + i;

            console.log("==>", crossword[node.row][right], node.row, right);
            if (crossword[node.row][right] === "-") {
                count++;

                if(node.row - 1 >= 0) {
                    if (crossword[node.row - 1][right] === "-") {
                        resistChar.push(new Node(node.row, right, false));
                    }
                }
                if(node.row + 1 < 10) {
                    if (crossword[node.row + 1][right] === "-") {
                        console.log("FOUND!!", node.row+1, right);
                        resistChar.push(new Node(node.row, right, false));
                    }
                }
            }
            else {
                break;
            }
        }
        console.log("ok", resistChar);
        console.log("count ", count);

        if (count > 1) {
            // write column
            hints.forEach((element, index) => {
                if (element.length === 8) {
                    let map = clone(crossword);
                    for (let j = 0, len = element.length; j < len; j++) {
                        map[node.row] = map[node.row].replaceAt(node.col + j, element[j]);
                    }
                    pointQueue.push(resistChar);
                    run(pointQueue, map, hints.slice(index));
                }
            });
        }
    }
    else {
        // row
    }
}

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function getItem(crossword, i, j) {


}

function iter(isCol) {

    if (isCol) {

    }
    else {

    }
}

function run2(pointQueue, crossword) {

    const node = pointQueue.pop();
    let resistChar = [];
    let count = 0;

    console.log(node, crossword);
    // iter column
    resistChar = [];
    count = 0; 
    for (let i = 1; i < 10; i++) {
        // search row
        let left = node.col - i;
        let right = node.col + i;

        if (left >= 0) {
            console.log("left ", crossword[node.row][left]);
            if (crossword[node.row][left] === "-") {
                count++;
            }

        }

        if (right < 10) {
            console.log("right", crossword[node.row][right]);
            if (crossword[node.row][right] === "-") {
                count++;
            }
        }
    }
    console.log("count : ", count);

    count = 0;
    for (let i = 1; i < 10; i++) {
        // search column
        let up = node.row - i;
        let down = node.row + i;

        if (up >= 0) {
            //
            console.log("up", crossword[up][node.col]);
            count++;
        }

        if (down< 10) {
            console.log("down", crossword[down][node.col]);
            count++;
        }
    }
    console.log("count : ", count);
}



const data1Quiz = [
    //'+-++++++++',
    //'+-++++++++',
    '+--------+',
    '+-++++-+-+',
    '+-++++-+-+',
    '+-----++++',
    '+-+++-++++',
    '+-+++-++++',
    '+++++-++++',
    '++------++',
    '+++++-++++',
    '+++++-++++' ];
//const data1Words = 'LONDON;DELHI;ICELAND;ANKARA';
const data1Words = 'ABCDEFGH;LONDON;DELHI;ICELAND;ANKARA';

crosswordPuzzle(data1Quiz, data1Words);
