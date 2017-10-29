/**
 * @param {string[]} strs
 * @return {string}
 */

/**
 *思路
 *直接使用字符串的方法reduce()实现
 *检索计算的数组跟下一条数组的相同字符，直到遇到不同，再返回相同部分
 *然后遍历到最后结束，会直接返回计算完的数组
 *
 */

var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) return '';
    
    return strs.reduce((str, next) => {
        let i = 0;
        while (str[i] && next[i] && str[i] === next[i]) i++;
        return str.slice(0, i);
    });
};
