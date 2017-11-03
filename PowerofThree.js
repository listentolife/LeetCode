/**
 * @param {number} n
 * @return {boolean}
 */

/**
 *思路
 *这题简单处理，直接除以3判断有没有余数，直到有余数，再判断余数是否为1
 *是1，则说明是可以被3整除的，否则不是
 *另一种有趣的计算方法时直接换成3进制，判断是否存在“10”
 *
 */
 
var isPowerOfThree = function(n) {
    // return /^10*$/.test(n.toString(3));
    if (n === 0) return false;
    while (n % 3 === 0) n /= 3;
    return n === 1;
};
