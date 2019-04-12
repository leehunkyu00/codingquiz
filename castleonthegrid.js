let map = [];
let queue = [];
let lineSize = -1;

class line {
    constructor(startX, startY, endX, endY, footPrint, count) {
        this.startX = startX;           // num
        this.startY = startY;           // num
        this.endX = endX;               // num
        this.endY = endY;               // num
        this.footPrint = footPrint;     // []
        this.count = count;     // []
    }
}

// Complete the minimumMoves function below.
function minimumMoves(grid, startX, startY, goalX, goalY) {

    let footPrint = [];
    grid.forEach((value, index) => {
        map.push(value.split(''));
        footPrint.push(new Array(value.length).fill(false));
    });
    lineSize = footPrint[0].length;

    // init
    addQueue(startX, startY, footPrint, 0);

    let res = -1;
    // loop
    while(1) {
        let curState = queue.shift();

        if (curState === undefined) {
            break;
        }

        curState.count += 1;
        // paint foot print

        printFootprint(curState);

        addQueueLine(curState);

        let tmp = getCount(curState, goalX, goalY);
        
        if (res === -1 && tmp !== -1) {
            res = tmp;
        }
        else {
            if (res > tmp)
                res = tmp;
        }
    }
    return res;
}


function addQueue(startX, startY, footPrint, count) {

    let endX;
    let endY;

    // left
    endX = -1;
    endY = -1;

    for (let i = 1; i < lineSize; i++) {
        let moveY = startY - i;

        if (moveY < 0)
            break;

        if (map[startX][moveY] !== '.' ||
            footPrint[startX][moveY] !== false) {
            break;
        } 
        endX = startX;
        endY = moveY;
    }
    if (endX !== -1 && endY !== -1) {
        queuePush(new line(startX, startY, endX, endY, footPrint, count));
    }

    // right
    endX = -1;
    endY = -1;

    for (let i = 1; i < lineSize; i++) {
        let moveY = startY + i;

        if (moveY >= lineSize)
            break;

        if (map[startX][moveY] !== '.' ||
            footPrint[startX][moveY] !== false) {
            break;
        } 
        endX = startX;
        endY = moveY;
    }
    if (endX !== -1 && endY !== -1) {
        queuePush(new line(startX, startY, endX, endY, footPrint, count));
    }

    // up
    endX = -1;
    endY = -1;

    for (let i = 1; i < lineSize; i++) {
        let moveX = startX - i;

        if (moveX < 0)
            break;

        if (map[moveX][startY] !== '.' ||
            footPrint[moveX][startY] !== false) {
            break;
        } 
        endX = moveX;
        endY = startY;
    }
    if (endX !== -1 && endY !== -1) {
        queuePush(new line(startX, startY, endX, endY, footPrint, count));
    }

    // down
    endX = -1;
    endY = -1;

    for (let i = 1; i < lineSize; i++) {
        let moveX = startX + i;

        if (moveX >= lineSize)
            break;

        if (map[moveX][startY] !== '.' ||
            footPrint[moveX][startY] !== false) {
            break;
        } 
        endX = moveX;
        endY = startY;
    }
    if (endX !== -1 && endY !== -1) {
        queuePush(new line(startX, startY, endX, endY, footPrint, count));
    }
}

function printFootprint(line) {

    let horzCount = Math.abs(line.startY - line.endY);
    let vertCount = Math.abs(line.startX - line.endX);

    // print horizontal line
    let horzStart = line.startY < line.endY ? line.startY : line.endY;
    for (let i = 0; i <= horzCount; i++) {
        line.footPrint[line.startX][horzStart + i] = true;
    }

    let vertStart = line.startX < line.endX ? line.startX : line.endX;
    for (let i = 0; i <= vertCount; i++) {
        line.footPrint[vertStart + i][line.startY] = true;
    }
}

function addQueueLine(line) {

    let horzCount = Math.abs(line.startY - line.endY);
    let vertCount = Math.abs(line.startX - line.endX);

    if (horzCount > 0) {
        // print horizontal line
        let horzStart = line.startY < line.endY ? line.startY : line.endY;
        for (let i = 0; i <= horzCount; i++) {
            addQueue(line.startX, horzStart + i, line.footPrint, line.count);
        }
    }

    if (vertCount > 0) {
        let vertStart = line.startX < line.endX ? line.startX : line.endX;
        for (let i = 0; i <= vertCount; i++) {
            addQueue(vertStart + i, line.startY, line.footPrint, line.count);
        }
    }
}

function getCount(line, goalX, goalY) {

    let horzCount = Math.abs(line.startY - line.endY);
    let vertCount = Math.abs(line.startX - line.endX);
    let res = -1;

    //console.log("getCount ", line, goalX, goalY);
    if (horzCount > 0) {
        // print horizontal line
        let horzStart = line.startY < line.endY ? line.startY : line.endY;
        for (let i = 0; i <= horzCount; i++) {
            if(line.startX === goalX && horzStart + i === goalY) {
                res = line.count;
                break;
            }
        }
    }

    if (vertCount > 0) {
        let vertStart = line.startX < line.endX ? line.startX : line.endX;
        for (let i = 0; i <= vertCount; i++) {
            if (vertStart + i === goalX && line.startY === goalY)  {
                res = line.count;
                break;
            }
        }
    }

    return res;

}

function queuePush(line) {

    let isExist = false;
    const lineStringfy = JSON.stringify(line);

    queue.forEach((value) => {
        const valueStringfy = JSON.stringify(value);
        if (valueStringfy === lineStringfy) {
            isExist = true;
        }
    });

    if(isExist === false) {
        queue.push(line);
    }
}

const data1 = {
    grid: ['.X.', '.X.', '...'],
    startX: 0,
    startY: 0,
    goalX: 0,
    goalY: 2
}

const data2 = {
    grid: [
        '...X.',
        '.X.X.',
        '.X.X.',
        '.X.X.',
        '.....',
    ],
    startX: 0,
    startY: 0,
    goalX: 1,
    goalY: 4
}

const data3 = {
    grid: [
'.X..XX...X',
'X.........',
'.X.......X',
'..........',
'........X.',
'.X...XXX..',
'.....X..XX',
'.....X.X..',
'..........',
'.....X..XX',
    ],
    startX: 9,
    startY: 1,
    goalX: 9,
    goalY: 6
}       // 3
const data = data3;
minimumMoves(data.grid, data.startX, data.startY, data.goalX, data.goalY);