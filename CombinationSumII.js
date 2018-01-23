/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 /**
  *跟CombinationSum的方法类似
  *把数组做一次从小到大排序
  *然后传入遍历数组序数index跟target
  *然后把candidates[index]入栈res，然后把index+1跟target-candidates[index]继续传入，直到target等于0，则入栈res到solu
  *否则target小于0或者数组遍历完，则放弃res
  */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    let res = [],
        solu = [];
    var search = function (index, target) {
        if (target === 0) return solu.push(res.slice());
        if (target < 0) return;
        if (index === candidates.length) return;
        res.push(candidates[index]);
        search(index + 1, target - candidates[index]);
        res.pop();
        while (candidates[index] === candidates[index + 1]) index++;
        search(index + 1, target);
    }
    search(0, target);
    return solu;
};



