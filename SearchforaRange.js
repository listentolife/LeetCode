/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /**
 *思路
 *直接遍历，找到第一个等于target的值后，确定区间起始值
 *继续遍历，一直到不等于target之前，每遍历到一个元素相等则end加1
 *
 */

var searchRange = function(nums, target) {
    let start = -1,
        end = -1,
        i = 0;
    while (i < nums.length) {
        if (nums[i] === target) {
            if (start === -1) start = i;
            end = i;
        }
        i++;
    }
    return [start, end];
};
