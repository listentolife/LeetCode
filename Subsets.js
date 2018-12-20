/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let solu = [];
    let curSol = [];
    nums.sort((a, b) => a - b);
    var search = function (nums, start) {
        solu.push(curSol.slice());
        for(let i = start; i < nums.length; i++){
            curSol.push(nums[i]);
            search(nums, i + 1);
            curSol.pop();
        }
    }
    
    search(nums, 0);
    return solu;
};