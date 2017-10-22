/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
