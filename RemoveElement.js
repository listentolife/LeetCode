/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 /**
  *思路：
  *通过指针在剔除指定元素时获得数组最新长度
  *
  */

var removeElement = function(nums, val) {
    var i = 0;
    var len = 0;
    for (i = 0; i < nums.length; i++) {
    	if (nums[i] == val) {
    		continue;
    	}
    	nums[len] = nums[i];
    	len++;
    }


    return len;
};
