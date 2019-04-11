//import fs from 'fs';
const fs = require('fs');

fs.readFile('data', 'utf8', (err, data) => {

    let dataArr = data.split('\n');
    let directionArr = {};

    for(let idx in dataArr) {
        /*
        let rest = dataArr[idx];

        let arr = rest.split('휴게소');

        //console.log(arr[0]+arr[1]);       // name
        console.log(arr[0]);       // name

        if (directionArr[arr[1]] === undefined) {
            directionArr[arr[1]] = 0;
        }

        directionArr[arr[1]] += 1;
        if (arr[1] && arr[1].includes("(")) {
            //console.log(arr[1].substr(1).slice(0, -1),directionArr[arr[1]]);

            //console.log(arr[1].substr(1).slice(0, -1));
        } 
        else {
            //console.log(arr[1],directionArr[arr[1]]);

            //console.log(arr[1]);
        }

        */
        console.log(("0000"+dataArr[idx]).substr(-3));
    }
});
