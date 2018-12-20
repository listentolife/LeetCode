/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (a[nums[i]]) {
            return true;
        } else {
            a[nums[i]] = 1;
        }
    }
    return false;
};

/*
var containsDuplicate = function(nums) {
    return (new Set(nums).size !== nums.length);    
};*/