/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
 * 参考了Quick select的思路，用数组中间的元素把数组分成两个数组，然后判断第k大的值在哪一边数组中，扔掉另一边数组，然后只对值所在数组继续递归
 * 最小复杂度是O(n),最大复杂度是O(n2)
 */
var findKthLargest = function(nums, k) {
    
    //return nums.sort((a,b)=>a-b).reverse()[k-1]

    if (nums.length === 1) return nums[0];

    let mid = Math.round(nums.length/2) - 1;
    let n = nums[mid];
    let left = [],
        right = [];
    for (let i = 0; i < nums.length; i++) {
        if (mid !== i) {
            if (nums[i] < n) {
                right.push(nums[i]);
            } else if (nums[i] >= n) {
                left.push(nums[i]);
            }
        } 
    }
    if (left.length === k - 1) {
    	return n;
    } else if (left.length >= k) {
    	return findKthLargest(left, k);
    } else {
    	return findKthLargest(right, k - left.length - 1);
    }
};


/*
var findKthLargest = function(nums, k) {
return nums.sort((a,b)=>a-b).reverse()[k-1]
};
*/