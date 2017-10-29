/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 *思路
 *使用二分法，mid中间值小于尾部值时，说明最小值在左边，否则在右边
 *前者情况下尾部值取中间值继续二分，后者情况下起始值取中间值后一位
 *后面查看其它代码的时候，发现用 >>> 1 可以直接相当于 / 2 
 *（因为二进制向右减一位相当于二进制每一位减1，相当于数值除以二，并取商的整数部分）
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
        else min = mid + 1;
    }
    return nums[max];
    
};
