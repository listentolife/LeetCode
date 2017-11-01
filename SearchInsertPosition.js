/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 *思路
 *使用二分法
 *先排除在数组最大最小值之外的情况
 *比较中间值跟目标值的大小，再移动二分起始值跟结束值，直到遇到相等或起始值跟结束值相邻
 *
 */
 
var searchInsert = function(nums, target) {
    let start = 0,
        stop = nums.length - 1,
        mid;
    if (target < nums[0]) return 0;
    if (target > nums[stop]) return stop + 1;
    if (nums[start] === target) return start;
    if (nums[stop] === target) return stop;
    while (start < stop) {
        mid = Math.floor((start + stop) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            if(mid + 1 >= stop) return stop;
            start = mid;
        } else {
            if(mid - 1 <= start) return mid;
            stop = mid;
        }
    }
};
