/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 *思路
 *同样使用二分法
 *增加一个判断条件，当中间值与尾部值相同时，尾部值前移一位
 *
 */

var findMin = function(nums) {
    if (nums.length === 0) return -1;
    let min = 0,
        max = nums.length - 1,
        mid;
    while (min < max) {
        mid = Math.floor((min + max) / 2); /*mid = (min + max) >>> 1;*/
        if (nums[mid] < nums[max]) max = mid;
        else if (nums[mid] > nums[max]) min = mid + 1;
        else max--;
    }
    return nums[max];
};
