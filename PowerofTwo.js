/**
 * @param {number} n
 * @return {boolean}
 */

/**
 *思路
 *这题用到Math.log()
 *直接计算出以2为底n的对数是不是整数即可
 *
 */
 
var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log(n/4)/Math.log(2));
};
