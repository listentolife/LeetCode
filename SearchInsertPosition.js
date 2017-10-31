/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 *思路
 *同样使用二分法
 *增加一个判断条件，当中间值与尾部值相同时，尾部值前移一位
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
