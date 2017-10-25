/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /**
  *思路：
  *使用哈希表来做
  *遍历数组每个元素nums[i]
  *判断target-nums[i]是否存在哈希表中
  *存在则返回两个值的下标
  *不存在则把元素存入哈希表
  *
  */

var twoSum = function(nums, target) {
    let arr = [],
        hash = {},
        len = nums.length,
        t1, index = 0, t2;
    while (index < len) {
        t2 = len - index - 1;
        hash[nums[t2]] = t2;
        t1 = hash[target - nums[index]];
        if (t1 !== undefined && t1 !== index) {
            arr.push(index)
            index > t1 ? arr.unshift(t1) : arr.push(t1);
            break;
        }
        hash[nums[index]] = index;
        index++;
    }
    return arr;
};
