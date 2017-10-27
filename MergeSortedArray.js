/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 /**
  *思路：
  *两个数组合并后长度一定是(m+n)
  *所以直接从后对比两个数组，大的赋值入nums1
  *这样不会影响nums1前面的元素数据丢失
  */

var merge = function(nums1, m, nums2, n) {
    k = m + n;
    m--;
    n--;
    while (k--) {
        if (n < 0 || nums1[m] > nums2[n]) nums1[k] = nums1[m--];
        else nums1[k] = nums2[n--];
    }
};
