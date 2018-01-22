/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 /**
  *利用迭代方式，传入n，k跟用于记录当前数列组res,
  *然后在迭代方法中，把n值加到res中；如果k等于1了，则res已经填完，入栈答案数组resArr，
  *再把剩下的n-1，k-1跟res继续传入
  *
  */
var combine = function(n, k) {
    var resArr = [],
        res = [];
    if (n === 0 || n < k || k === 0) return resArr;
    var dfs = function (n, k, res) {
        if (k === 1) {
            for (let j = n; j >= 1; j--) {
                res.unshift(j);
                resArr.unshift(res.concat());
                res.shift();
            }
            return;
        }
        for (let i = n; i >= k; i--) {
            res.unshift(i);
            dfs(i - 1, k - 1, res);
            res.shift();
        }
        return;
    }
    dfs(n, k, res);
    return resArr;
};
