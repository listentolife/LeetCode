/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  *思路：
  *指针初始从0下标开始，从1开始遍历数组时
  *当遍历中的数组元素跟指针的元素不同时，指针移动指向下一位，并用遍历中的元素赋值到指针位
  *遇到相等时，指针不动，继续遍历元素，直到不相等
  *
  */

var removeDuplicates = function(nums) {
    let i = 0;
    for (let index = 1; index < nums.length; index++) {
    	if (nums[index] != num[i]) {
    		num[++i] = num[index];
    	}
    }

    return i + 1;
};
