/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 /**
  *跟Combination的方法类似
  *把数组做一次从小到大排序
  *然后传入遍历数组序数index跟target
  *然后把candidates[index]入栈res，然后把index跟target-candidates[index]继续传入，直到target等于0，则入栈res到solu
  *否则target小于0或者数组遍历完，则放弃res
  *如果candidates[index + 1]有值，则弹出res最后一位，传入index +1跟target-candidates[index]
  */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    let res = [],
        solu = [];
    var search = function (index, target) {
        if (target === 0) return solu.push(res.slice());
        if (target < 0) return;
        if (index === candidates.length) return;
        res.push(candidates[index]);
        search(index, target - candidates[index]);
        res.pop();
        search(index + 1, target);
    }
    search(0, target);
    return solu;
};
