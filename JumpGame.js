/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 *思路
 *这题用贪心算法
 *遍历数组，当当前数组元素可到达的下标大于前一步，则保留当前最大下标，否则还是之前的最大下标继续遍历
 *如果最大下标等于当前数组元素下标，则跳出遍历
 *判断最大可达下标是否大于实际数组最大下标，是则返回true，否则false
 *
 */
 
var canJump = function(nums) {
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        maxIndex = Math.max(maxIndex, i + nums[i]);
        if (maxIndex === i) break;
    }
    return maxIndex >= nums.length - 1;
};