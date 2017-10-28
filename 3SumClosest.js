/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 *思路
 *先做排除跟排序
 *然后在排除头尾为答案的可能
 *进入遍历，从第一位开始，两个指针指向遍历元素的后一位跟最后一位
 *在指针不重叠的情况下，当求和跟target的距离短于上一次，则获得求和值
 *否则根据求和值减target的正负，移动指针，直到重叠结束
 *遍历完后返回最终的求和值
 *
 */

var threeSumClosest = function(nums, target) {
    
    const MAX_DIFF = 2147483647;
    let len = nums.length,
        res,
        sum,
        diff = MAX_DIFF,
        po1,
        po2;
    
    if (len < 3) return 0;
    if (len === 3) {
        res = nums[0] + nums[1] + nums[2];
        return res;
    }
    nums.sort((a, b) => a - b); 
    if (nums[0] + nums[1] + nums[2] >= target) {
        res = nums[0] + nums[1] + nums[2];
    }
    if (nums[len - 1] + nums[len - 2] + nums[len - 3] <= target) {
        res = nums[len - 1] + nums[len - 2] + nums[len - 3];
        return res;
    }
    for(let i = 0; i < len - 2; i++) {
        po1 = i + 1;
        po2 = len - 1;
        while (po1 < po2) {
            sum = nums[po1] + nums[po2] + nums[i];
            if (diff > Math.abs(sum - target)) {
                diff = Math.abs(sum - target);
                res = sum;
            }
            if (diff === 0) return res;
            if (sum > target) {
                po2--;
            } else if (sum < target) {
                po1++;
            }
        }
    }
    return res;
};
