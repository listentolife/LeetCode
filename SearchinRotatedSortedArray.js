/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    
    let left = 0,
        right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.round((left + right)/2);
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) { 
            // 如果nums[left] < nums[mid]，说明左边是顺序的
            if (nums[left] <= target && target < nums[mid]) {
                // 如果target在左边，则只需要探索数组左边区域
                right = mid - 1;
            } else {
                // 如果target不在左边，则不能说明target的大小，只能探索右边区域
                left = mid + 1;
            }
        } else {
            // 如果nums[left] > nums[mid]，说明右边是顺序的
            if (nums[mid] < target && target <= nums[right]) {
                // 如果target在右边，则只需要探索数组右边区域
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
};