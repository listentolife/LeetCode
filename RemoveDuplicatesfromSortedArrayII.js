/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  *思路：
  *指针初始从0下标开始，从1开始遍历数组时
  *当遍历中的数组元素跟指针的元素不同时，指针移动指向下一位，并用遍历中的元素赋值到指针位
  *遇到相等时，开始计数，指针继续移动，继续遍历元素，计数超过2时，指针不动，继续遍历元素，直到不相等
  *
  */

var removeDuplicates = function(nums) {
    let i = 0;
    let count = 0;
    for (let index = 1; index < nums.length; index++) {
    	if (nums[index] == nums[i]) {
    		count++;
    		if (count < 2) {
    			nums[++i] = nums[index];
    		}
    	} else {
    		nums[++i] = nums[index];
    		count = 0
    	}
    }

    return i + 1;
};
