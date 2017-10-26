/**
 * @param {number[]} digits
 * @return {number[]}
 */

 /**
  *思路：
  *直接从后遍历数组
  *如果+1后大于9，则需要进位
  *如果+1后小于等于9，则直接结束
  *如果遍历完还大于9，则从头加入1
  *
  */

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};
