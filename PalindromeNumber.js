/**
 * @param {number} x
 * @return {boolean}
 */

/**
 *思路
 *有个最简单的实现就是把x字符串化，然后分离数位上的值，再头尾反转，再合并，最后比较判断
 *
 *另一套思路是把x最后一位取出到另一个变量num上，并去掉个位
 *循环到x小于num后，再判断两值是否相等，或者x是否等于去掉个位的num
 *
 */

var isPalindrome = function(x) {
    // return x == x.toString().split('').reverse().join('');
    
    if ( x < 0 || (x % 10 === 0 && x !== 0)){
        return false;
    }
    let num = 0;
    while (x > num) {
        num = num * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return x === num || x === parseInt(num / 10);
};
