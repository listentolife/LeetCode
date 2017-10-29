/**
 * @param {string} s
 * @return {number}
 */

/**
 *思路
 *根据罗马数字的书写规则，低位字符在低位为增加的数值，在高位为缺少的数值
 *所以当低位字符的位置高于高位字符，需要减掉
 *
 */

var romanToInt = function(s) {
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let pre = 0,
        res = 0,
        key,
        num;
    for (let i = s.length - 1; i >= 0; i--) {
        key = s[i],
        num = roman[key];
        if (num < pre) {
            res -= num;
        } else {
            res += num;
        }
        pre = num;
    }
    return res;
};
