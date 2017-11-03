/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 *思路
 *这题利用位运算XOR，1^1=0^0=0,1^0=0^1=1
 *当一个数跟自己进行XOR位运算时，得到的值一定是0，所以res在累加时（res的初始值已经赋值为长度），
 *会不断抵消错位的计算，最后只剩下没有在数组中的数值，这个数值就是结果
 *
 */
 
var missingNumber = function(nums) {
    let res = nums.length;
    for(let i = 0; i < nums.length; i++) res ^= i ^ nums[i];
    return res;
};
