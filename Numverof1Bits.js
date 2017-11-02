/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/**
 *思路
 *这题用到位运算
 *将数字与1进行二进制计算，1&0=0，1&1=1，0&0=0，因此可以以此判断最右边是否有1
 *然后在用>>>来向右移位，>>>是包括左边的符号位一起移位，>>是不包括符号位的移位
 *
 */
 
var hammingWeight = function(n) {
    let count = 0;
    while (n > 0) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
};
