/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 *思路
 *这题用贪心算法
 *设置遍历的起始点为当前元素下标，终点为当前可达元素的下标
 *遍历过程中因为会改变起始点跟终点的值，所有要另外用两个值获得起始点跟终点至
 *遍历中如果当前可达最大下标大于之前的值，则获得最大下标及下一个遍历的终点值
 *
 */
 
var jump = function(nums) {
    let len = nums.length,
        beginInd = 0,
        endInd = nums[beginInd] + beginInd,
        max = beginInd + endInd,
        count = 1;
    if (len < 2) return 0;
    
    while (max < len - 1) {
        let beg = beginInd,
            end = endInd;
        for (var i = beg + 1; i <= end; i++) {
            if (i + nums[i] > max) {
                max = i + nums[i];
                endInd = max;
            }
        }
        beginInd = end;
        count++;
    }
    return count;
};