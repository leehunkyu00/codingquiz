// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var count = 0;
    var primitiveArr = [];

    for(let i = 0, sIdx = 0; i < S.length; i++) {
        if (S[i] === "(") {
            count++;
        }
        else if (S[i] === ")") {
            count--;
        }

        if (count === 0) {
            primitiveArr.push(S.substring(sIdx, i + 1));
            sIdx = i + 1;
        }
    }

    var res = primitiveArr.reduce((prev, curr) => {
        prev += curr.substring(1, curr.length - 1);

        return prev;
    }, "")

    return res;
};

removeOuterParentheses("(()())(())");
removeOuterParentheses("(()())(())(()(()))");