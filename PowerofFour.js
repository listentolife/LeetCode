/**
 * @param {number} num
 * @return {boolean}
 */

/**
 *思路
 *这题简单处理，直接除以4判断有没有余数，直到有余数，再判断余数是否为1
 *是1，则说明是可以被4整除的，否则不是
 *另一种有趣的计算方法时直接换成4进制，判断是否存在“10”
 *
 */
 
var isPowerOfFour = function(num) {
    // return /^10*$/.test(num.toString(4));
    if (num === 0) return false;
    while (num % 4 === 0) num /= 4;
    return num === 1;
};
