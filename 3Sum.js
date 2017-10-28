/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 *思路
 *先剔除少于三个的数组
 *先排序
 *从最小值开始遍历，如果遍历到元素大于0，则直接返回结束
 *从遍历值的后一位开始，用两个指针指向头尾元素
 *如果头尾元素及当前遍历元素之和为0，则返货三者下标，头尾指针移动到不同值元素继续判断
 *不为0则，判断大于0则先移动尾指针，小于0则先移动头指针
 *
 */
 
var threeSum = function(nums) {
    resArr = [];
    if (nums.length < 3) return resArr;
    nums = nums.sort(function (a,b) {
        return a - b;
    });
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return resArr;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let n = i + 1, m = nums.length - 1; n < m;) {
            if (nums[i] + nums[n] + nums[m] === 0) {
                resArr.push([nums[i], nums[n], nums[m]]);
                n++;
                m--;
                while (n < m && nums[n] == nums[n - 1]) {
                    n++;
                }
                while (n < m && nums[m] == nums[m + 1]) {
                    m--;
                }
            } else if (nums[i] + nums[n] + nums[m] > 0) {
                m--;
            } else {
                n++;
            }
        }
    }
    return resArr;
};
