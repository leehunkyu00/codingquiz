// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {

    var res = 0;
    for (let i = 0; i < J.length; i++) {
        var re = new RegExp(J[i], "g");
        var foundArr = S.match(re);

        if (foundArr !== null) {
            res += foundArr.length;
        }
    }

    return res;
};


console.log(numJewelsInStones("aA", "aAAbbbb"));