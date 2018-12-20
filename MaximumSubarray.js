/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
  *这里是遍历数组，每遍历一个，就把前面的数组的最大值计算出来，然后再遍历下一个数
  *下一个数只要先加到当前和值中，跟这个数对比一个最大值，再去跟最大值对比
  */
var maxSubArray = function(nums) {
    if (nums.length <= 0) {
    	return null;
    }
    let maxVal = curVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
    	curVal = Math.max(nums[i], curVal + nums[i]);
    	maxVal = Math.max(curVal, maxVal);
    }
    return maxVal;
};