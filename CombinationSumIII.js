/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    /*let res = [],
        solu = [];
    var search = function (index, target, count) {
        if (index < 10 && target === 0 && count === k + 1) return solu.push(res.slice());
        else if (index === 10 || target < 0 || count >= k) return;
        for (let i = index; i < 9 - k + 1; i++) {
            res.push(i);
            search(i + 1, target - i, count + 1);
            res.pop();
        }
    }
    search(1, n, 0);
    return solu;*/
    
    let res = [],
        solu = [];
    var search = function (index, target) {
        if (target === 0 && res.length === k) return solu.push(res.slice());
        if (target < 0) return;
        if (index === 10) return;
        res.push(index);
        search(index + 1, target - index);
        res.pop();
        while (index === index + 1) index++;
        search(index + 1, target);
    }
    search(1, n, 1);
    return solu;
};