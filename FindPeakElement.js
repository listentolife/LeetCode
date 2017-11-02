/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 *思路
 *这题用二分法
 *中间值在对比的时候，如果比左右都高，则就是峰值，直接返回结束
 *如果比前一元素小，则尾部指针指向前一元素，否则起始指针指向后一个元素
 *
 */
 
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    let start = 0,
        stop = nums.length - 1,
        mid;
    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if ((mid === 0 || nums[mid] > nums[mid - 1])&&(mid === nums.length - 1 || nums[mid] > nums[mid + 1])) return mid;
        else if (mid > 0 && nums[mid] < nums[mid - 1]) stop = mid - 1;
        else start = mid + 1;
    }
    return mid;
};
