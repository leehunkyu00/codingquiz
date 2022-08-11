// https://school.programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
// 데이터 처리 전문가가 되고 싶은 "어피치"는

// 1. make slice array : abc / abc / abc
// 2. compare slice array

function sliceRangeArr(s, windowSize) {
    let res = [];

    let i = 0;
    while (i < s.length) {
        if (i + windowSize < s.length) {
            res.push(s.slice(i, i + windowSize));
        }
        else {
            res.push(s.slice(i, s.length));
        }
        
        i += windowSize;
    }
    
    return res;
}


function solution(s) {
    if (s.length == 1) {
        return 1;
    }
    
    let shorterLen = s.length;
    const maxCmpCnt = parseInt(s.length / 2); // max compress count
    
    for (let i = 1; i <= maxCmpCnt; i++) {
        const slicedArr = sliceRangeArr(s, i);
        
        let target = 1;
        let base = 0;
        
        let compStr = '';
        let count = 1;
        while (slicedArr.length > target) {
            if (slicedArr[base] == slicedArr[target]) {
                count++;
            }
            else {
                compStr += `${count == 1 ? '':count}${slicedArr[base]}`
                base = target;
                count = 1;
            }
            
            target++;
        }
        
        // last target
        compStr += `${count == 1 ? '':count}${slicedArr[target-1]}`
        
        shorterLen = Math.min(shorterLen, compStr.length)
    }
    
    return shorterLen;
}